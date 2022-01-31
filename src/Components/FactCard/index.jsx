import { RefreshIcon } from '@heroicons/react/solid'
import factIllustration from '../../Assets/catbooks.png'
import { motion } from 'framer-motion'

function NextFact() {
  window.location.reload(false)
}

function FactCard({ fact }) {
  return (
    <div className="relative flex flex-col w-full 2xl:w-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex justify-center items-center p-6 mx-14 md:mx-52 lg:mx-0 my-6 lg:my-0 lg:w-1/4  z-20 bg-violet-600 rounded-3xl shadow-xl  lg:-rotate-12 lg:-translate-x-14 translate-y-10">
          <p className="font-semibold text-xl text-white">Do you know ?</p>
        </div>
        <img
          src={factIllustration}
          alt="cat and books"
          className="absolute h-52 lg:h-80 right-0 lg:right-10 -top-16 lg:-top-32 -z-1"
        />
        <div className="relative flex p-8 md:p-14 lg:p-20 justify-center bg-white rounded-xl shadow-xl">
          <p className="text-lg lg:text-xl font-extralight">{fact}</p>
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
