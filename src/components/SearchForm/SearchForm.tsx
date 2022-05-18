import { Listbox, Transition } from '@headlessui/react';
import { CaretDown, Check } from 'phosphor-react';
import { Fragment } from 'react';
import { FeedbackStatus } from '../../pages/Feedbacks';

interface SearchFormProps {
  selected: FeedbackStatus | undefined;
  setSelected: (value: FeedbackStatus | undefined) => void;
}

export interface FeedbackStatusType {
  id: number;
  title: string;
  value: string | undefined;
}

export const FeedbackStatusArray: FeedbackStatusType[] = [
  {
    id: 0,
    title: 'Todos',
    value: undefined,
  },
  {
    id: 1,
    title: 'Pendente',
    value: 'PENDING',
  },
  {
    id: 2,
    title: 'Em Análise',
    value: 'UNDER_ANALYSIS',
  },
  {
    id: 3,
    title: 'Rejeitado',
    value: 'REJECTED',
  },
  {
    id: 4,
    title: 'Resolvido',
    value: 'RESOLVED',
  },
];

export function SearchForm({ selected, setSelected }: SearchFormProps) {
  let selectedTitle = 'Todos';
  switch (selected) {
    case FeedbackStatus.PENDING:
      selectedTitle = FeedbackStatusArray[1].title;
      break;
    case FeedbackStatus.UNDER_ANALYSIS:
      selectedTitle = FeedbackStatusArray[2].title;
      break;
    case FeedbackStatus.REJECTED:
      selectedTitle = FeedbackStatusArray[3].title;
      break;
    case FeedbackStatus.RESOLVED:
      selectedTitle = FeedbackStatusArray[4].title;
      break;
    case undefined:
      selectedTitle = 'Todos';
    default:
      selectedTitle = 'Todos';
  }

  return (
    <div className="flex items-center gap-2 mr-4">
      <span className="font-bold">filtrar por</span>

      <Listbox value={selected} onChange={setSelected}>
        <div className="relative flex my-2">
          <Listbox.Button className="relative w-40 cursor-default rounded-lg bg-white dark:bg-black py-2 px-10 text-left shadow-inner text-sm">
            <span>{selectedTitle}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <CaretDown className="h-5 w-5 text-zinc-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-10 w-full rounded-lg bg-white dark:bg-black py-1 shadow-lg dark:shadow-black text-sm">
              {FeedbackStatusArray.map((status) => (
                <Listbox.Option
                  key={status.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-10 ${
                      active
                        ? 'bg-zinc-100 dark:bg-zinc-900 text-brand-500'
                        : 'text-zinc-900 dark:text-zinc-200'
                    }`
                  }
                  value={status.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${selected ? 'font-bold' : 'font-normal'}`}
                      >
                        {status.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-500">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
