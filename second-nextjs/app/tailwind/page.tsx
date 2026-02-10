export default function Tailwind() {
  return (
    <main>
      <div className="p-4 mt-4 dark:bg-linear-30 dark:from-zinc-950 dark:to-zinc-800 m-2 rounded-md border-zinc-500/50 border shadow-md">
        <h1 className="font-bold text-4xl">Hello</h1>
        <div>
          <p>
            Code uses style:{" "}
            <code className="dark:text-blue-500">dark:text-blue-500</code>
          </p>
        </div>
      </div>
      <div className="dark:bg-slate-900 p-2 m-2 w-1/3 border-l-4 border-red-500 rounded-md shadow-lg">
        <p>
          <span className="text-red-500 text-5xl">"</span>
          Hello world Hello world Hello world Hello world Hello world Hello
          world Hello world{" "}
        </p>
        <p className="font-semibold text-red-500 text-xl">Name</p>
        <p className="text-slate-500 text-sm">Class</p>
      </div>
    </main>
  );
}
