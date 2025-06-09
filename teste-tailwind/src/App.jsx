{/* <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div> */}

import "./App.css";
function App() {
  return (
    <>
      {/* <div
        className="mx-auto flex max-w-sm items-center p-6 shadow-lg bg-red-50">
        <div className="text-xl font-medium text-black dark:text-white">
          <h1>Hello World, React + Tailwind</h1>
          <p className="text-gray-500 dark:text-gray-400">Tentaremos formatar algo!</p>
        </div>
      </div> */}
      <div className="min-h-screen bg-blue-100 flex items-center justify-center ">
        <div className="p-8 bg-whithe roundend-2x1 shadow-lg">
          <h1 className="text-2x1 font-bold text-purple-600">Hello World, React + Tailwind</h1>
          <p className="mt-2 text-gray-600">Tentaremos formatar algo!</p>
        </div>
      </div>

    </>
  )
}

export default App
