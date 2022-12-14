import React,{useRef, useContext} from 'react';
import ExperienceCard from './ExperienceCard';
import { ExperienceContext } from '../../App';

const Experience = () => {
  //const [experience,setExperience]=useState([]);
  const [experience,setExperience]=useContext(ExperienceContext);
  const name=useRef('');
  const role=useRef('');
  const duration=useRef('');
  const handleSubmit=()=>{
    if(name.current.value!=='' && role.current.value!=='' && duration.current.value!=='')
    {
      setExperience([...experience,{name:name.current.value,role:role.current.value,duration:duration.current.value}])
      name.current.value='';
      role.current.value='';
      duration.current.value='';
    }
    else{
      alert("All fields are mandatory");
    }
  }
  return (
    <div className='bg-gray-300 h-150'>
      <div className='flex flex-col items-center pt-20 gap-5'>
        <div className='flex gap-4'>
          <p>Organization Name:</p>
          <input className='rounded' ref={name} placeholder="Amazon" type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Role:</p>
          <input className='rounded' ref={role} placeholder="Frontend developer" type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Duration:</p>
          <input className='rounded' ref={duration} placeholder="2019-Present" type="text"/>
        </div>
        <div className='pt-5'>
          <button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSubmit}>Add</button>
        </div>
        <div>
          <ExperienceCard/>
        </div>
      </div>
    </div>
  )
}

export default Experience;