import { FacebookLogo, GithubLogo, GoogleLogo } from 'phosphor-react';

export function Login() {
  return (
    <div className="flex flex-col w-[100%] max-w-xs sm:max-w-sm mx-auto">
      <div className="flex flex-col h-[72px] mt-8 bg-zinc-200 dark:bg-zinc-800 rounded-t-lg items-center justify-center">
        <h2 className="font-bold text-lg">Login</h2>
      </div>
      <div className="flex flex-col bg-zinc-200 dark:bg-zinc-900 rounded-b-lg items-center justify-center py-8 gap-6">
        <button className="flex justify-center items-center gap-2 relative w-[240px] h-[40px] sm:w-[300px] mx-8 bg-[#111111] rounded-md border-2 border-[#101010] text-gray-100 font-bold opacity-80 hover:opacity-100 hover:scale-x-105 transition-all duration-200">
          <GithubLogo
            className="absolute top-2 left-8 sm:left-12"
            size={20}
            weight="bold"
          />
          <span>Github</span>
        </button>
        <button className="flex justify-center items-center relative gap-2 w-[240px] h-[40px] sm:w-[300px] mx-8 bg-red-800 rounded-md border-2 border-red-900 text-gray-100 font-bold opacity-80 hover:opacity-100 hover:scale-x-105 transition-all duration-200">
          <GoogleLogo
            className="absolute top-2 left-8 sm:left-12"
            size={20}
            weight="bold"
          />
          <span>Google</span>
        </button>
        <button className="flex justify-center items-center relative gap-2 w-[240px] h-[40px] sm:w-[300px] mx-8 bg-blue-800 rounded-md border-2 border-blue-900 text-gray-100 font-bold opacity-80 hover:opacity-100 hover:scale-x-105 transition-all duration-200">
          <FacebookLogo
            className="absolute top-2 left-8 sm:left-12"
            size={20}
            weight="bold"
          />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
}
