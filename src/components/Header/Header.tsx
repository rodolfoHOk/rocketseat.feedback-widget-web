import { ModeButton } from './ModeButton';

export function Header() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 flex justify-between items-center p-4">
      <h1 className="font-bold">Feedback Widget</h1>
      <div>
        <ModeButton />
      </div>
    </div>
  );
}
