import { Menu, Transition } from '@headlessui/react';
import { User } from 'phosphor-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthenticationContext';

export function LoginArea() {
  const { user, signOut } = useAuth();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center bg-white dark:bg-zinc-900 rounded-l-[20px] rounded-r-[16px] hover:bg-brand-300 dark:hover:bg-brand-500 transition-colors duration-300">
        <div className="flex items-center justify-center">
          {user ? (
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={user.avatar_url}
            />
          ) : (
            <User
              className="w-[40px] h-[40px] border-2 border-zinc-500 rounded-full text-zinc-500"
              weight="light"
            />
          )}
        </div>
        <span className="w-[80px] text-sm overflow-x-hidden">
          {user ? user.name.split(' ')[0] : 'Anônimo'}
        </span>
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right flex flex-col p-3 z-10 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
          <Menu.Item>
            <span className="bg-zinc-200 dark:bg-zinc-800 rounded-t-lg px-2 py-1 text-sm text-center">
              {user ? user.name : 'Anônimo'}
            </span>
          </Menu.Item>
          <Menu.Item>
            <span className="bg-zinc-200 dark:bg-zinc-800 rounded-b-lg px-2 pb-2 text-xs text-center">
              {user ? user?.email : ''}
            </span>
          </Menu.Item>
          <Menu.Item>
            {user ? (
              <button
                className="flex items-center justify-center h-10 bg-brand-300 dark:bg-brand-700 rounded-lg mt-3 hover:bg-brand-500 hover:dark:bg-brand-500"
                onClick={signOut}
              >
                <span className="font-bold text-sm text-zinc-100">Logout</span>
              </button>
            ) : (
              <Link
                className="flex items-center justify-center h-10 bg-brand-300 dark:bg-brand-700 rounded-lg mt-3 hover:bg-brand-500 hover:dark:bg-brand-500"
                to="/login"
              >
                <span className="font-bold text-sm text-zinc-100">Login</span>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
