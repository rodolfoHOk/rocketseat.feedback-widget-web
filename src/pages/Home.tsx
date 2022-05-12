export function Home() {
  return (
    <div className="flex flex-col w-full h-full min-w-[310px] mx-20 md:mx-28">
      <div className="flex h-[72px] mt-8 bg-zinc-200 dark:bg-zinc-900 opacity-50 rounded-lg items-center">
        <h2 className="ml-8 font-bold text-lg">Home</h2>
      </div>
      <div className="flex flex-col w-full mt-8 gap-8 md:flex-row">
        <div className="flex md:w-[67%] bg-zinc-200 dark:bg-zinc-900 opacity-50 h-[450px] rounded-lg items-center" />
        <div className="flex md:w-[33%] bg-zinc-200 dark:bg-zinc-900 opacity-50 h-[450px] rounded-lg items-center" />
      </div>
      <div className="flex h-[36px] mt-8 mb-4 bg-zinc-200 dark:bg-zinc-900 opacity-50 rounded-lg items-center"></div>
    </div>
  );
}
