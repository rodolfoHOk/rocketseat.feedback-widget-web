import { Popover, Transition } from '@headlessui/react';
import {
  ArchiveBox,
  FileSearch,
  HourglassMedium,
  ShieldCheck,
  XSquare,
} from 'phosphor-react';
import { Fragment } from 'react';
import { ApiProblemResponse } from '../../errors/ApiProblemResponse';
import { Feedback, FeedbackStatus } from '../../pages/Feedbacks';
import { feedbackTypes } from '../FeedbackWidget/WidgetForm';
import { StatusButton } from './StatusButton';

interface FeedbackItemProps {
  feedback: Feedback;
  handleStatusClick: (feedbackId: string, status: FeedbackStatus) => void;
}

export function FeedbackItem({
  feedback,
  handleStatusClick,
}: FeedbackItemProps) {
  return (
    <div className="flex flex-col md:max-w-[400px] md:flex-1 gap-2 bg-white dark:bg-black rounded-xl shadow-md dark:shadow-black">
      <div className="flex items-center justify-center gap-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-t-xl">
        <img
          src={feedbackTypes[feedback.type].image.source}
          alt={feedbackTypes[feedback.type].image.alt}
          width={24}
        />
        <span className="font-bold">{feedbackTypes[feedback.type].title}</span>
      </div>
      <div className="flex gap-2 md:gap-4 flex-col p-4">
        <Popover className="flex">
          <Popover.Button
            className="flex justify-center h-[180px] min-w-[200px] w-full bg-zinc-100 dark:bg-black rounded-md border-4 disabled:border-0 border-zinc-100 dark:border-black hover:border-brand-500 dark:hover:border-brand-500 transition-colors duration-300"
            disabled={!feedback.screenshot}
          >
            {feedback.screenshot ? (
              <img className="rounded-md" src={feedback.screenshot} />
            ) : (
              <XSquare
                size={64}
                weight="thin"
                className="my-auto text-zinc-400 dark:text-zinc-500"
              />
            )}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-75"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-100 scale-75"
          >
            <Popover.Panel className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-brand-700 dark:bg-brand-700 p-2 rounded-xl">
              <div>
                <img
                  className="max-h-[90vh] max-w-[90vw]"
                  src={feedback.screenshot}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <div className="flex flex-col gap-1 w-full md:h-[180px] overflow-auto bg-zinc-100 dark:bg-zinc-900 rounded-md p-2">
          <div className="flex justify-between">
            <span className="font-bold text-sm text-brand-500">Comentário</span>
            <span className="text-xs text-zinc-400 dark:text-zinc-700">
              {new Date(feedback.created_at).toLocaleDateString()}
            </span>
          </div>
          <span className="md:text-sm">{feedback.comment}</span>
        </div>
        <div className="flex flex-col items-start px-2 gap-1 w-full">
          <div className="flex justify-between w-full">
            <span className="flex font-bold text-sm text-brand-500">
              Status
            </span>

            <span className="text-xs text-zinc-400 dark:text-zinc-700">
              {feedback.modified_at
                ? new Date(feedback.modified_at).toLocaleDateString()
                : new Date().toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-end gap-1 w-full">
            <StatusButton
              icon={<HourglassMedium size={32} weight="light" />}
              label={'Pendente'}
              disabled={feedback.status === FeedbackStatus.PENDING}
              onClick={() =>
                handleStatusClick(feedback.id, FeedbackStatus.PENDING)
              }
            />

            <StatusButton
              icon={<FileSearch size={32} weight="light" />}
              label={'Em Análise'}
              disabled={feedback.status === FeedbackStatus.UNDER_ANALYSIS}
              onClick={() =>
                handleStatusClick(feedback.id, FeedbackStatus.UNDER_ANALYSIS)
              }
            />

            <StatusButton
              icon={<ArchiveBox size={32} weight="light" />}
              label={'Rejeitado'}
              disabled={feedback.status === FeedbackStatus.REJECTED}
              onClick={() =>
                handleStatusClick(feedback.id, FeedbackStatus.REJECTED)
              }
            />

            <StatusButton
              icon={<ShieldCheck size={32} weight="light" />}
              label={'Resolvido'}
              disabled={feedback.status === FeedbackStatus.RESOLVED}
              onClick={() =>
                handleStatusClick(feedback.id, FeedbackStatus.RESOLVED)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
