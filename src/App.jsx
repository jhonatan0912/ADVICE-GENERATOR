import React, { useEffect, useState } from 'react'
import AdviceCard from './components/AdviceCard'

const App = () => {

  const URL = 'https://api.adviceslip.com/advice';

  const [advice, setadvice] = useState([])
  const [loader, setLoader] = useState(true)

  const getAdvice = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setLoader(false)
    setadvice(data.slip)
  }
  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className='w-sreen h-screen app-container flex justify-center items-center text-center'>
      {loader ? <h2 className='text-5xl md:text-9xl text-white'>Loading...</h2> : <AdviceCard item={advice} getAdvice={getAdvice} />}
    </div>
  )
}

export default App
