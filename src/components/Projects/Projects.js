import React,{useRef, useContext} from 'react';
import { ProjectContext } from '../../App';
import ProjectCard from './ProjectCard';

const Experience = () => {
  const [projects,setProjects]=useContext(ProjectContext);
  const name=useRef('');
  const description=useRef('');
  const handleSubmit=()=>{
    if(name.current.value!=='' && description.current.value!=='')
    {
      setProjects([...projects,{name:name.current.value,description:description.current.value}])
      name.current.value='';
      description.current.value='';
    }
    else{
      alert("All fields are mandatory");
    }
  }
  return (
    <div className='bg-gray-300 h-screen'>
      <div className='flex flex-col items-center pt-20 gap-5'>
        <div className='flex gap-4'>
          <p>Project Name:</p>
          <input className='rounded' ref={name} type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Description:</p>
          <textarea className='rounded h-24 w-52' ref={description} type="text"/>
        </div>
        <div className='pt-5'>
          <button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSubmit}>Add</button>
        </div>
        <div>
          <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default Experience