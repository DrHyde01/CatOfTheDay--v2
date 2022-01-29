import { motion } from 'framer-motion'

function About() {
  return (
    <div className="flex justify-center items-center w-full h-screen p-40  bg-rose-100">
      <div className="relative flex flex-col w-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-center w-1/3 p-6 z-20 bg-violet-600 rounded-3xl shadow-xl  -rotate-12  -translate-x-14 translate-y-10">
            <p className="font-semibold text-xl text-white">About</p>
          </div>
          <div className="flex p-20 justify-start bg-white rounded-xl shadow-xl z-10">
            <div className="flex flex-col">
              <h1 className="font-twinkle text-5xl mb-16">Cat of the day 🐈</h1>
              <div className="flex flex-col ml-6">
                <h2 className="text-xl mb-8">A React SPA for cat lovers 💜</h2>
                <p className="font-light mb-3">
                  This app works with 2 amazing API who run PUURFECTLY ===&gt;{' '}
                </p>
                <a
                  href="https://thecatapi.com/"
                  className="m-2 font-medium  uppercase hover:text-pink-600"
                >
                  Cat API
                </a>
                <a
                  href="https://alexwohlbruck.github.io/cat-facts/"
                  className="m-2 font-medium uppercase hover:text-pink-600"
                >
                  Cat Facts
                </a>

                <p className="font-light mt-5">
                  Any questions ? Go to my{' '}
                  <a
                    href="https://github.com/DrHyde01"
                    className="font-medium hover:text-pink-600"
                  >
                    GitHub page{' '}
                  </a>{' '}
                  😎
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
