import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-col bg-gray-300'>
      <div className='flex justify-center p-5 bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-black'>
          <h1 className='text-4xl font-bold'>Resume Builder</h1>
      </div>
      <div className='flex bg-black text-white h-10 items-center pl-2 justify-between'>
        <div className='flex gap-4 h-full'>
          <Link className='h-full' to='/'><button className='navbtn'>Home</button></Link>
          <Link className='h-full' to='/basicinfo'><button className='navbtn'>Basic Info</button></Link>
          <Link className='h-full' to='/skills'><button className='navbtn'>Skills</button></Link>
          <Link className='h-full' to='/experience'><button className='navbtn'>Experience</button></Link>
          <Link className='h-full' to='/education'><button className='navbtn'>Education</button></Link>
          <Link className='h-full' to='/interests'><button className='navbtn'>Interests</button></Link>
        </div>
        <div className='h-full'>
          <Link className='h-full pr-2' to='/resume'><button className='navbtn'>View Resume</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar