export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
        Software Engineer
      </p>

      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
        Akash Kute
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-400">
        I'm building something new.
      </p>

      <p className="mt-2 text-gray-500">
        Portfolio coming soon.
      </p>

      <div className="mt-10 flex gap-6">
<a
  href="https://github.com/akashkutex"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-gray-400 transition hover:text-white"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/akash-kute"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-gray-400 transition hover:text-white"
>
  LinkedIn
</a>
      </div>

      <p className="absolute bottom-8 text-xs text-gray-600">
        akashkute.com
      </p>

    </main>
  );
}