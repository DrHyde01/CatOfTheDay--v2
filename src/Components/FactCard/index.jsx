import { RefreshIcon } from '@heroicons/react/solid'
import factIllustration from '../../Assets/catbooks.png'
import { motion } from 'framer-motion'

function NextFact() {
  window.location.reload(false)
}

function FactCard({ fact }) {
  return (
    <div className="relative flex flex-col w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex justify-center items-center p-6 w-1/4  z-20 bg-violet-600 rounded-3xl shadow-xl  -rotate-12 -translate-x-14 translate-y-10">
          <p className="font-semibold text-xl text-white">Do you know ?</p>
        </div>
        <img
          src={factIllustration}
          alt="cat and books"
          className="absolute h-80 right-10 -top-32 -z-1"
        />
        <div className="relative flex p-20 justify-center bg-white rounded-xl shadow-xl">
          <p className="text-xl font-extralight">{fact}</p>
        </div>
        <button
          onClick={NextFact}
          className="absolute -right-5 -bottom-5 flex justify-center items-center p-3 h-14 w-14 z-20 bg-pink-600 rounded-full shadow-xl  ease-in-out duration-500 hover:bg-pink-500"
        >
          <RefreshIcon className=" text-white ease-in-out duration-500 hover:rotate-90" />
        </button>
      </motion.div>
    </div>
  )
}

export default FactCard
