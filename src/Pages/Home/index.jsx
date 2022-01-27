import React, { useState, useEffect } from 'react'

function Home() {
  const [catData, setCatData] = useState({})

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
    <div className="h-screen bg-rose-100">
      <div>
        <img src={catData} alt="chat" />
      </div>
    </div>
  )
}

export default Home
