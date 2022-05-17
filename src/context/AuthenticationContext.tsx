import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { toast } from 'react-toastify';

import { api } from '../lib/api';
import { ApiProblemResponse } from '../errors/ApiProblemResponse';
import { ErrorTypes } from '../errors/ErrorTypes';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

export enum Provider {
  'github',
  'google',
  'facebook',
}

interface AuthenticationContextData {
  user: User | null;
  isLoggingIn: boolean;
  signIn: (provider: Provider) => void;
  signOut: () => void;
}

interface AuthenticationProviderProps {
  children: ReactNode;
}

interface ApiAuthenticationResponse {
  token: string;
  user: User;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

export function AuthenticationProvider({
  children,
}: AuthenticationProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  function signIn(provider: Provider) {
    let signInUrl = '';

    if (provider === Provider.github) {
      const githubQueryParams = queryString.stringify({
        client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_GITHUB_REDIRECT_URI,
        scope: ['read:user', 'user:email'].join(' '),
        allow_signup: true,
      });

      signInUrl = `${
        import.meta.env.VITE_GITHUB_LOGIN_URL
      }?${githubQueryParams.toString()}`;
    } else if (provider === Provider.google) {
      const googleQueryParams = queryString.stringify({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
        scope: ['openid', 'email', 'profile'].join(' '),
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
      });

      signInUrl = `${
        import.meta.env.VITE_GOOGLE_LOGIN_URL
      }?${googleQueryParams}`;
    } else if (provider === Provider.facebook) {
      const facebookQueryParams = queryString.stringify({
        client_id: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_FACEBOOK_REDIRECT_URI,
        scope: ['email'].join(','),
        response_type: 'code',
        auth_type: 'rerequest',
        display: 'popup',
      });

      signInUrl = `${
        import.meta.env.VITE_FACEBOOK_LOGIN_URL
      }?${facebookQueryParams}`;
    }

    window.location.href = signInUrl;
  }

  async function signInApi(url: string, code: string) {
    setIsLoggingIn(true);

    await api
      .post<ApiAuthenticationResponse>(url, {
        code,
      })
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem('@feedget:token', token);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        setUser(user);
        navigate('/');
      })
      .catch((err) => {
        const { type } = err.response.data as ApiProblemResponse;
        if (type === ErrorTypes.AUTHENTICATION_ERROR) {
          toast.error('Erro ao tentar autenticar', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            toastId: 'authErrorToast',
          });
          navigate('/login');
        }
      })
      .finally(() => setIsLoggingIn(false));
  }

  function signOut() {
    localStorage.removeItem('@feedget:token');
    api.defaults.headers.common.authorization = '';
    setUser(null);
  }

  async function getUserInfos() {
    api
      .get<User>('/auth/user-infos')
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        signOut();
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('@feedget:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      getUserInfos();
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;

    if (url.includes('github?code=')) {
      const githubCode = new URLSearchParams(window.location.search).get(
        'code'
      );
      if (githubCode) {
        signInApi('/auth/github', githubCode);
      }
    } else if (url.includes('google?code=')) {
      const googleCode = new URLSearchParams(window.location.search).get(
        'code'
      );
      if (googleCode) {
        signInApi('/auth/google', googleCode);
      }
    } else if (url.includes('facebook?code=')) {
      const facebookCode = new URLSearchParams(window.location.search).get(
        'code'
      );
      if (facebookCode) {
        signInApi('/auth/facebook', facebookCode);
      }
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{ user, isLoggingIn, signIn, signOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuth = () => useContext(AuthenticationContext);
