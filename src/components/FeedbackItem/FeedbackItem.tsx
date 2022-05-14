import { XSquare } from 'phosphor-react';
import { Feedback } from '../../pages/Feedbacks';
import { feedbackTypes } from '../FeedbackWidget/WidgetForm';

interface FeedbackItemProps {
  feedback: Feedback;
}

export function FeedbackItem({ feedback }: FeedbackItemProps) {
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
      <div className="flex gap-2 md:gap-4 flex-row-reverse md:flex-col p-4">
        <button
          className="flex justify-center h-[180px] min-w-[200px] max-w-[200px] md:max-w-none bg-black rounded-md border-4 disabled:border-0 border-black hover:border-brand-500 dark:hover:border-brand-500 transition-colors duration-300"
          disabled={!feedback.screenshot}
        >
          {feedback.screenshot ? (
            <img className="rounded-md" src={feedback.screenshot} />
          ) : (
            <XSquare
              size={64}
              weight="thin"
              className="my-auto text-zinc-500"
            />
          )}
        </button>

        <div className="flex flex-col w-full h-[180px] overflow-auto bg-zinc-200 dark:bg-zinc-900 rounded-md p-2">
          <span className="font-bold text-sm text-brand-500">Comentário</span>
          <span className="md:text-sm">{feedback.comment}</span>
        </div>
      </div>
    </div>
  );
}
