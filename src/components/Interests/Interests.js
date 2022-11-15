import React,{useRef, useContext} from 'react';
import InterestCard from './InterestCard';
import { InterestContext } from '../../App';

const Interests = () => {
  //const [interests,setInterests]=useState([]);
  const [interests,setInterests]=useContext(InterestContext);
  const interestRef=useRef('');
  const handleSubmit=()=>{
    if(interestRef.current.value!==''){
      setInterests([...interests,interestRef.current.value]);
    }
    else{
      alert('Empty interest cant be added');
    }
    interestRef.current.value='';
  }
  return (
    <div className='flex justify-center h-screen pt-20 bg-gray-300'>
      <div className='flex flex-col h-72 pt-30 items-center'>
        <div className='flex gap-5 pt-4'>
          <p>Interests:</p>
          <input type="text" className='rounded' ref={interestRef} placeholder='Eg: Reading Books'/>
        </div>
        <div className='pt-4'><button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSubmit}>Add</button></div>
        <div className='pt-4'>
        <InterestCard/>
        </div>
      </div>
    </div>
  )
}

export default Interests;