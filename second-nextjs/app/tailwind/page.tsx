export default function Tailwind() {
  return (
    <main>
      <div className="p-4 mt-4 dark:bg-linear-30 dark:from-zinc-900 dark:to-zinc-800 m-2 rounded-md border-zinc-500/50 border shadow-md">
        <h1 className="font-bold text-4xl">Hello</h1>
        <div>
          <p>
            Code uses style:{" "}
            <code className="dark:text-blue-500">dark:text-blue-500</code>
          </p>
        </div>
      </div>
    </main>
  );
}
