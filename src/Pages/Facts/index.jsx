import React, { useState, useEffect } from 'react'
import FactCard from '../../Components/FactCard'

function Facts() {
  const [factData, setFactData] = useState()

  useEffect(() => {
    fetch(
      'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'
    )
      .then((response) => response.text())
      .then((response) => {
        const fact = JSON.parse(response).text
        setFactData(fact)
        console.log(fact)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-screen p-8 md:p-20 lg:p-40 bg-rose-100 dark:bg-slate-800 transition-all">
      <FactCard fact={factData} />
    </div>
  )
}

export default Facts
