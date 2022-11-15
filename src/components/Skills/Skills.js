import React,{useRef, useContext} from 'react';
import SkillCard from './SkillCard';
import { SkillContext } from '../../App';

const Skills = () => {
  // const [skills,setSkills]=useState([]);
  const [skills,setSkills]=useContext(SkillContext);
  const skillRef=useRef('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(skillRef.current.value!==''){
      setSkills([...skills,skillRef.current.value]);
    }
    else{
      alert('Empty skill cant be added');
    }
    skillRef.current.value='';
  }
  return (
    <div className='flex justify-center h-screen pt-20 bg-gray-300'>
      <div className='flex flex-col h-72 pt-30 items-center'>
        <div><p>Enter the skills to be added:</p></div>
        <div className='pt-4'><input type="text" className='rounded' ref={skillRef} placeholder='Eg: Java'/></div>
        <div className='pt-4'><button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSubmit}>Add</button></div>
        <div className='pt-4'>
        {/* {
          skills.length>0?(<SkillCard skills={skills} setSkills={setSkills}/>):(<div>No skills added</div>)
        } */}
        <SkillCard/>
        </div>
      </div>
    </div>
  )
}

export default Skills