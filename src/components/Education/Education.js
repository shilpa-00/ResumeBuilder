import React,{useRef, useContext} from 'react';
import EducationCard from './EducationCard';
import { EducationContext } from '../../App';

const Education = () => {
  //const [education,setEducation]=useState([]);
  const [education,setEducation]=useContext(EducationContext);
  const name=useRef('');
  const type=useRef('');
  const result=useRef('');
  const duration=useRef('');
  const handleSubmit=()=>{
    if(name.current.value!=='' && type.current.value!=='' && result.current.value!=='' && duration.current.value!=='')
    {
      // console.log(name.current.value);
      setEducation([...education,{name:name.current.value,type:type.current.value,result:result.current.value,duration:duration.current.value}])
      name.current.value='';
      type.current.value='';
      result.current.value='';
      duration.current.value='';
    }
    else{
      alert("All fields are mandatory");
    }
  }
  return (
    <div className='bg-gray-300 h-screen'>
      <div className='flex flex-col items-center pt-20 gap-5'>
        <div className='flex gap-4'>
          <p>Institution Name:</p>
          <input className='rounded' ref={name} type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Type:</p>
          <input className='rounded' ref={type} type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>CGPA/Percentage:</p>
          <input className='rounded' ref={result} type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Duration:</p>
          <input className='rounded' ref={duration} type="text"/>
        </div>
        <div className='pt-5'>
          <button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSubmit}>Add</button>
        </div>
        <div>
          <EducationCard/>
        </div>
      </div>
    </div>
  )
}

export default Education;