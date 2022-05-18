import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { FeedbackItem } from '../components/FeedbackItem/FeedbackItem';
import { FeedbackType } from '../components/FeedbackWidget/WidgetForm';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Unauthorized } from '../components/Unauthorized/Unauthorized';
import { useAuth } from '../context/AuthenticationContext';
import { ApiProblemResponse } from '../errors/ApiProblemResponse';
import { ErrorTypes } from '../errors/ErrorTypes';
import { api } from '../lib/api';

export enum FeedbackStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  RESOLVED = 'RESOLVED',
  UNDER_ANALYSIS = 'UNDER_ANALYSIS',
}

export interface Feedback {
  id: string;
  type: FeedbackType;
  comment: string;
  screenshot: string;
  status: FeedbackStatus;
  created_at: Date;
  modified_at: Date;
}

interface PagedFeedbacks {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  feedbacks: Feedback[];
}

export function Feedbacks() {
  const { user } = useAuth();

  if (!user) {
    return <Unauthorized />;
  }

  const [pagedFeedbacks, setPagedFeedbacks] = useState<PagedFeedbacks | null>(
    null
  );
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(9);
  const [filter, setFilter] = useState<FeedbackStatus | undefined>(undefined);

  function toastError(message: string) {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      toastId: 'authErrorToast',
    });
  }

  async function getFeedbacks(
    page: number,
    size: number,
    status?: FeedbackStatus
  ) {
    api
      .get<PagedFeedbacks>(
        `/feedbacks?page=${page}&size=${size}&status=${status ? status : ''}`
      )
      .then((response) => {
        setPagedFeedbacks(response.data);
      })
      .catch((err) => {
        const { type, detail, field } = err.response.data as ApiProblemResponse;
        if (type === ErrorTypes.AUTHENTICATION_ERROR) {
          if (detail === 'Authorization token expired') {
            toastError('Token de autorização expirado. Efetue novo login');
          } else {
            toastError('Token de autorização não informado ou inválido');
          }
        } else if (type === ErrorTypes.FORBIDDEN_ERROR) {
          toastError('Usuário não tem permissão para efetuar esta operação');
        } else if (type === ErrorTypes.INVALID_DATA) {
          toastError(`Dado fornecido inválido. Campo: ${field}`);
        } else if (type === ErrorTypes.INTERNAL_SERVER_ERROR) {
          toastError('Algo deu errado');
        }
      });
  }

  function partitionArray(array: any[], fragmentSize: number): any[][] {
    const arrayCopy = [...array];
    const fragments = [];
    while (arrayCopy.length) {
      fragments.push(arrayCopy.splice(0, fragmentSize));
    }
    return fragments;
  }

  function handlePageSelected(event: { selected: number }) {
    setPage(event.selected + 1);
  }

  async function handleStatusClick(feedbackId: string, status: FeedbackStatus) {
    api
      .put<Feedback>(`/feedbacks/${feedbackId}`, {
        status,
      })
      .then(() => getFeedbacks(page, size, filter))
      .catch(() => toastError('Não foi possível atualizar status'));
  }

  function handleSetFilter(filter: FeedbackStatus | undefined) {
    setPage(1);
    setFilter(filter);
  }

  useEffect(() => {
    getFeedbacks(page, size, filter);
  }, [page, size, filter]);

  return (
    <div className="flex flex-col w-full min-w-[310px] shadow-md dark:shadow-black">
      <div className="flex justify-between mt-4 bg-zinc-200 dark:bg-zinc-800 items-center shadow-lg dark:shadow-black">
        <h2 className="font-bold text-lg ml-4">Lista de feedbacks</h2>
        <SearchForm selected={filter} setSelected={handleSetFilter} />
      </div>
      <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 px-4 py-4 gap-4 shadow-lg dark:shadow-black overflow-auto">
        {pagedFeedbacks?.feedbacks &&
          partitionArray(pagedFeedbacks?.feedbacks, 3).map((row, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 justify-around w-full"
            >
              {row.map((feedback) => (
                <FeedbackItem
                  key={feedback.id}
                  feedback={feedback}
                  handleStatusClick={handleStatusClick}
                />
              ))}
            </div>
          ))}
      </div>
      {pagedFeedbacks && (
        <ReactPaginate
          containerClassName="flex justify-center md:justify-end my-3 md:mr-28 gap-2"
          pageClassName="flex justify-center items-center py-1 w-7 text-sm bg-zinc-200 dark:bg-zinc-900 rounded-md hover:bg-brand-500 dark:hover:bg-brand-500 transition-colors duration-200 shadow-md shadow-zinc-400 dark:shadow-black"
          breakClassName="flex justify-center items-center py-1 w-7 text-sm bg-zinc-200 dark:bg-zinc-900 rounded-md hover:bg-brand-500 dark:hover:bg-brand-500 transition-colors duration-200 shadow-md shadow-zinc-400 dark:shadow-black"
          previousClassName="flex justify-center items-center py-1 w-7 text-sm bg-zinc-200 dark:bg-zinc-900 rounded-md hover:bg-brand-500 dark:hover:bg-brand-500 transition-colors duration-200 shadow-md shadow-zinc-400 dark:shadow-black"
          nextClassName="flex justify-center items-center py-1 w-7 text-sm bg-zinc-200 dark:bg-zinc-900 rounded-md hover:bg-brand-500 dark:hover:bg-brand-500 transition-colors duration-200 shadow-md shadow-zinc-400 dark:shadow-black"
          activeClassName="flex justify-center items-center py-1 w-7 text-sm text-zinc-100 font-bold bg-brand-300 dark:bg-brand-700 rounded-md hover:bg-brand-500 dark:hover:bg-brand-500 transition-colors duration-200 shadow-md shadow-zinc-400 dark:shadow-black"
          pageCount={pagedFeedbacks?.totalPages || 0}
          previousLabel="<"
          nextLabel=">"
          pageRangeDisplayed={3}
          marginPagesDisplayed={0}
          initialPage={0}
          forcePage={page - 1}
          onPageChange={(event) => handlePageSelected(event)}
        />
      )}
    </div>
  );
}
