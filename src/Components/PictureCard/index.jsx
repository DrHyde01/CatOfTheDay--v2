import { RefreshIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'

function NextPicture() {
  window.location.reload(false)
}

function PictureCard({ catPicture }) {
  return (
    <div className="flex flex-col w-1/2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={catPicture}
          alt="cat of the day"
          className="object-cover border-8 w-full border-amber-400 shadow-xl"
        />

        <button
          onClick={NextPicture}
          className="flex justify-center items-center p-3 h-14 w-14 bg-pink-600 rounded-full shadow-xl -translate-y-8 -translate-x-6 rotate-12 ease-in-out duration-500 hover:bg-pink-500"
        >
          <RefreshIcon className=" text-white ease-in-out duration-500 hover:rotate-90" />
        </button>
      </motion.div>
    </div>
  )
}

export default PictureCard
