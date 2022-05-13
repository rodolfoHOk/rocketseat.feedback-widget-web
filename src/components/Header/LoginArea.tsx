import { User } from 'phosphor-react';
import { useAuth } from '../../context/AuthenticationContext';

export function LoginArea() {
  const { user } = useAuth();

  return (
    <div>
      <button className="flex items-center bg-white dark:bg-zinc-900 rounded-l-[20px] rounded-r-[16px]">
        <div className="flex items-center justify-center">
          {user ? (
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={user.avatar_url}
            />
          ) : (
            <User className="w-[40px] h-[40px] border-2 border-zinc-500 rounded-full text-zinc-500" />
          )}
        </div>
        <span className="w-[80px] text-sm overflow-x-hidden">
          {user ? user.name.split(' ')[0] : 'Anônimo'}
        </span>
      </button>
    </div>
  );
}
