import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedbackItem } from '../components/FeedbackItem/FeedbackItem';
import { FeedbackType } from '../components/FeedbackWidget/WidgetForm';
import { useAuth } from '../context/AuthenticationContext';
import { api } from '../lib/api';

export interface Feedback {
  id: string;
  type: FeedbackType;
  comment: string;
  screenshot: string;
}

interface PagedFeedbacks {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  feedbacks: Feedback[];
}

export function Feedbacks() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    navigate('/');
  }

  const [pagedFeedbacks, setPagedFeedbacks] = useState<PagedFeedbacks | null>(
    null
  );
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  async function getFeedbacks(page: number, size: number) {
    api
      .get<PagedFeedbacks>(`/feedbacks?page=${page}&size=${size}`)
      .then((response) => {
        setPagedFeedbacks(response.data);
      })
      .catch((err) => console.log(err));
  }

  function partitionArray(array: any[], fragmentSize: number): any[][] {
    const arrayCopy = [...array];
    const fragments = [];
    while (arrayCopy.length) {
      fragments.push(arrayCopy.splice(0, fragmentSize));
    }
    console.log(fragments);
    return fragments;
  }

  useEffect(() => {
    getFeedbacks(page, size);
  }, [page, size]);

  return (
    <div className="flex flex-col w-full min-w-[310px] shadow-md dark:shadow-black">
      <div className="flex h-10 mt-4 bg-zinc-200 dark:bg-zinc-800 items-center shadow-lg dark:shadow-black">
        <h2 className="font-bold text-lg ml-4">Lista de feedbacks</h2>
      </div>
      <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 px-4 py-4 gap-4 shadow-lg dark:shadow-black overflow-auto">
        {pagedFeedbacks?.feedbacks &&
          partitionArray(pagedFeedbacks?.feedbacks, 3).map((row, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 justify-around w-full"
            >
              {row.map((feedback) => (
                <FeedbackItem feedback={feedback} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
