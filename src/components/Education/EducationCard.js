import React,{useContext} from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { EducationContext } from '../../App';

const EducationCard = () => {
    const [education,setEducation]=useContext(EducationContext);
    const handleDelete=(edu)=>{
        setEducation(education.filter(item=>item.name!==edu.name))
    }
    return (
        <div className='grid grid-cols-1 gap-4'>
            {
                education.map((edu)=>{
                    return(
                        // <div key={exp.name}>{exp.name}</div>
                        <div key={edu.name} className='border-2 bg-gray-500 text-white border-white w-96 h-32 rounded-lg overflow-hidden'>
                            <div className='flex justify-between'>
                                <p className='p-2 text-xl font-bold'>{edu.name}</p>
                                <button className='hover:bg-black p-2' onClick={()=>handleDelete(edu)}><AiOutlineDelete size={22} className='pt-1'/></button>
                            </div>
                            <p className='pl-2'>{edu.type}</p>
                            <p className='pl-2'>{edu.result}</p>
                            <p className='pl-2'>{edu.duration}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EducationCard;