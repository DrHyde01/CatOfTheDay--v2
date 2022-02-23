import React, { useState, useEffect } from 'react'
import PictureCard from '../../Components/PictureCard'

function Home() {
  const [catData, setCatData] = useState()

  const getCat = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?mime_types=jpg`).then(
      (response) =>
        response
          .json()
          .then((response) => {
            setCatData(response[0].url)
          })
          .catch((error) => console.log(error))
    )
  }
  useEffect(() => {
    setCatData(getCat)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-full bg-rose-100 dark:bg-slate-800 transition-all p-8 md:p-20 lg:p-40 2xl:p-72">
      <div className="flex flex-col w-full lg:w-1/2 2xl:w-1/3 mb-10 lg:mb-0">
        <h1 className="font-twinkle dark:text-white text-6xl lg:text-8xl 2xl:text-9xl mb-6 lg:mb-14">
          Cat <br /> of the day
        </h1>

        <p className=" text-base md:text-xl  dark:text-white font-light ml-0 lg:ml-6">
          Your daily source of cats{'  '}
          <span className="text-lg lg:text-4xl">🐈</span>
        </p>
      </div>

      <PictureCard catPicture={catData} getCat={getCat} />
    </div>
  )
}

export default Home
