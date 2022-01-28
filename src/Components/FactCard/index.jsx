import { RefreshIcon } from '@heroicons/react/solid'

function FactCard({ fact }) {
  return (
    <div className="relative flex flex-col w-full">
      <div className="flex justify-center items-center p-6 w-1/4 bg-violet-600 rounded-3xl shadow-md -rotate-12 -translate-x-14 translate-y-10">
        <p className="font-semibold text-xl text-white">Do you know ?</p>
      </div>
      <div className="flex p-20 justify-center bg-white rounded-xl shadow-xl">
        <p className="text-xl font-extralight">{fact}</p>
      </div>
      <button className="absolute -right-5 -bottom-5 flex justify-center items-center p-3 h-14 w-14 bg-pink-600 rounded-full shadow-md  ease-in-out duration-500 hover:bg-pink-500">
        <RefreshIcon className=" text-white ease-in-out duration-500 hover:rotate-90" />
      </button>
    </div>
  )
}

export default FactCard
