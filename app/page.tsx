import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex items-center justify-center">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm grid gap-24 place-items-center">
        <p className="text-2xl text-center relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          Just a playground. Nothing more.
        </p>
        <div className="items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on{" "}
            <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
          </a>
        </div>
      </div>
    </main>
  )
}
