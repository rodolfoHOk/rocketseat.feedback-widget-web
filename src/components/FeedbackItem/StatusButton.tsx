import { ReactNode } from 'react';

interface StatusButtonProps {
  icon: ReactNode;
  label: string;
  disabled: boolean;
  onClick: () => void;
}

export function StatusButton({
  icon,
  label,
  disabled,
  onClick,
}: StatusButtonProps) {
  return (
    <button
      className="flex justify-center items-center gap-1 w-10 h-10 rounded-md hover:bg-brand-500 hover:text-white disabled:text-brand-500 disabled:hover:bg-white disabled:dark:hover:bg-black"
      disabled={disabled}
      title={label}
      onClick={onClick}
    >
      <span>{icon}</span>
    </button>
  );
}
