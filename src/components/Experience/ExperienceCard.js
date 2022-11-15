import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { ExperienceContext } from '../../App';

const ExperienceCard = () => {
    const [experience,setExperience]=useContext(ExperienceContext);
    const handleDelete=(exp)=>{
        setExperience(experience.filter(item=>item.name!==exp.name))
    }
    console.log(experience);
    return (
        <div className='grid grid-cols-1 gap-4'>
            {
                experience.map((exp)=>{
                    return(
                        // <div key={exp.name}>{exp.name}</div>
                        <div key={exp.name} className='border-2 bg-gray-500 text-white border-white w-96 h-32 rounded-lg overflow-hidden'>
                            <div className='flex justify-between'>
                                <p className='p-2 text-xl font-bold'>{exp.name}</p>
                                <button className='hover:bg-black p-2' onClick={()=>handleDelete(exp)}><AiOutlineDelete size={22} className='pt-1'/></button>
                            </div>
                            <p className='pl-2'>{exp.role}</p>
                            <p className='pl-2'>{exp.duration}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExperienceCard;