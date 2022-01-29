import React, { useState, useEffect } from 'react'
import PictureCard from '../../Components/PictureCard'

function Home() {
  const [catData, setCatData] = useState()

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search`).then((response) =>
      response
        .json()
        .then((response) => {
          setCatData(response[0].url)
        })
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div className="flex justify-between items-center h-full bg-rose-100 p-40">
      <div className="flex flex-col w-1/2">
        <h1 className="font-twinkle text-8xl mb-14">
          Cat <br /> of the day
        </h1>

        <p className="text-xl font-light ml-6">
          Your daily source of cats 🐈 🐈‍⬛
        </p>
      </div>

      <PictureCard catPicture={catData} />
    </div>
  )
}

export default Home
