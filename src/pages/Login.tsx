import { FacebookLogo, GithubLogo, GoogleLogo } from 'phosphor-react';
import queryString from 'query-string';

export function Login() {
  const githubQueryParams = queryString.stringify({
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_GITHUB_REDIRECT_URI,
    scope: ['read:user', 'user:email'].join(' '),
    allow_signup: true,
  });

  const googleQueryParams = queryString.stringify({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    scope: ['openid', 'email', 'profile'].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });

  const facebookQueryParams = queryString.stringify({
    client_id: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_FACEBOOK_REDIRECT_URI,
    scope: ['email'].join(','),
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
  });

  const githubLoginUrl = `${
    import.meta.env.VITE_GITHUB_LOGIN_URL
  }?${githubQueryParams.toString()}`;

  const googleLoginUrl = `${
    import.meta.env.VITE_GOOGLE_LOGIN_URL
  }?${googleQueryParams}`;

  const facebookLoginUrl = `${
    import.meta.env.VITE_FACEBOOK_LOGIN_URL
  }?${facebookQueryParams}`;

  return (
    <div className="flex flex-col w-[100%] max-w-xs sm:max-w-sm mx-auto">
      <div className="flex flex-col h-[72px] mt-8 bg-zinc-200 dark:bg-zinc-800 rounded-t-lg items-center justify-center shadow-lg dark:shadow-black">
        <h2 className="font-bold text-lg">Logar com :</h2>
      </div>
      <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 rounded-b-lg items-center justify-center py-8 gap-6 shadow-lg dark:shadow-black">
        <a
          className="flex justify-center items-center gap-2 relative w-[240px] h-[40px] sm:w-[300px] mx-8 bg-[#111111] rounded-md border-2 border-[#101010] text-gray-100 font-bold opacity-80 shadow-md shadow-zinc-400 dark:shadow-black hover:opacity-100 hover:scale-x-105 hover:shadow-brand-700 hover:dark:shadow-brand-700 transition-all duration-200"
          href={githubLoginUrl}
        >
          <GithubLogo
            className="absolute top-2 left-8 sm:left-12"
            size={20}
            weight="bold"
          />
          <span>Github</span>
        </a>
        <a
          className="flex justify-center items-center relative gap-2 w-[240px] h-[40px] sm:w-[300px] mx-8 bg-red-800 rounded-md border-2 border-red-900 text-gray-100 font-bold opacity-80 shadow-md shadow-zinc-400 dark:shadow-black hover:opacity-100 hover:scale-x-105 hover:shadow-brand-700 hover:dark:shadow-brand-700 transition-all duration-200"
          href={googleLoginUrl}
        >
          <GoogleLogo
            className="absolute top-2 left-8 sm:left-12"
            size={20}
            weight="bold"
          />
          <span>Google</span>
        </a>
        <a
          className="flex justify-center items-center relative gap-2 w-[240px] h-[40px] sm:w-[300px] mx-8 bg-blue-800 rounded-md border-2 border-blue-900 text-gray-100 font-bold opacity-80 shadow-md shadow-zinc-400 dark:shadow-black hover:opacity-100 hover:scale-x-105 hover:shadow-brand-700 hover:dark:shadow-brand-700 transition-all duration-200"
          href={facebookLoginUrl}
        >
          <FacebookLogo
            className="absolute top-2 left-8 sm:left-12"
            size={20}
            weight="bold"
          />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}
