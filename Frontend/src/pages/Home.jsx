/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import Card from '../components/card'

const Home = () => {
  return (
    <div className='bg-black text-white h-screen flex flex-col items-start'>
      <div className='text-white text-2xl mt-8 ml-8 mb-4 p-15'>What's Popular</div>
      <Card />
    </div>
  )
}

export default Home