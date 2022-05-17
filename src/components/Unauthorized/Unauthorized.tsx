import { Link } from 'react-router-dom';

export function Unauthorized() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-[90vh] dark:shadow-black">
      <h2 className="font-bold text-lg">Acesso não Autorizado</h2>
      <p>
        Por favor efetuar o{' '}
        <Link
          className="font-bold text-brand-500 hover:text-brand-300 transition-colors duration-200"
          to="/login"
        >
          login
        </Link>
      </p>
    </div>
  );
}
