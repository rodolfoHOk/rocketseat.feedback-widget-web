import { Link } from 'react-router-dom';
import { LoginArea } from './LoginArea';
import { MenuButton } from './MenuButton';
import { ModeButton } from './ModeButton';

export function Header() {
  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-800 flex justify-between items-center z-10 p-4 shadow-md dark:shadow-md dark:shadow-brand-700">
        <h1 className="font-bold text-lg md:text-xl ml-12 md:ml-0">
          Feedback Widget
        </h1>
        <div className="hidden md:flex font-bold">
          <Link
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3 py-1 rounded-lg transition-colors duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3 py-1 rounded-lg transition-colors duration-300"
            to="/feedbacks"
          >
            Feedbacks
          </Link>
          <Link
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700 px-3 py-1 rounded-lg transition-colors duration-300"
            to="/login"
          >
            Login
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ModeButton />
          <LoginArea />
        </div>
      </div>
      <MenuButton />
    </>
  );
}
