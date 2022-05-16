import { Menu, Transition } from '@headlessui/react';
import { List, X } from 'phosphor-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function MenuButton() {
  return (
    <Menu as="div" className="flex flex-col md:hidden md:mt-0">
      <Menu.Button className="flex justify-center items-center w-10 h-10 z-20 ml-3 mt-[-56px] rounded-xl hover:bg-brand-500 hover:text-zinc-100 transition-colors duration-200">
        {({ open }) => (open ? <X size={32} /> : <List size={32} />)}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-75"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-100 scale-75"
      >
        <Menu.Items
          as="div"
          className="flex justify-center items-center gap-2 pt-7 pb-2 bg-zinc-50 dark:bg-zinc-900 shadow-md dark:shadow-md dark:shadow-black"
        >
          <Menu.Item>
            <Link
              className="hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3 py-1 rounded-lg transition-colors duration-300"
              to="/"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3 py-1 rounded-lg transition-colors duration-300"
              to="/feedbacks"
            >
              Feedbacks
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3 py-1 rounded-lg transition-colors duration-300"
              to="/login"
            >
              Login
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
