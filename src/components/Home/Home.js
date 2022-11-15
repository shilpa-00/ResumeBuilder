import React from 'react';
import resume from '.././resume.png';

const Home = () => {
  return (
    <div className='flex flex-wrap h-screen justify-center pt-20 bg-gray-300 gap-32'>
      <h1 className='flex flex-col flex-wrap pl-20 text-3xl text-white'><div>CREATE YOUR PROFESSIONAL RESUME</div><div>IN FEW MINUTES</div></h1>
      <img src={resume} className='h-96' alt='img'/>
    </div>
  )
}

export default Home