import React,{useContext} from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { SkillContext } from '../../App';

const SkillCard = () => {
    const [skills,setSkills]=useContext(SkillContext);
    const handleDelete=(skill)=>{
        setSkills(skills.filter(item => item !== skill))
    }
    return (
        <div className='grid grid-cols-1 gap-2'>
            {
                skills.map((skill)=>{
                    return( 
                        <div key={skill} className='flex bg-gray-500 text-white justify-between rounded-md overflow-hidden'>
                            <div className='px-3 rounded'>{skill}</div>
                            <button className='hover:bg-black' onClick={()=>handleDelete(skill)}><AiOutlineDelete size={22} className='pt-1'/></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillCard