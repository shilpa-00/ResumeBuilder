import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { ProjectContext } from '../../App';

const ProjectCard = () => {
    const [projects,setProjects]=useContext(ProjectContext);
    const handleDelete=(project)=>{
        setProjects(projects.filter(item=>item.name!==project.name))
    }
    return (
        <div className='grid grid-cols-1 gap-4'>
        {
            projects.map((project)=>{
                return(
                    <div key={project.name} className='border-2 bg-gray-500 text-white border-white w-96 h-32 rounded-lg overflow-hidden'>
                        <div className='flex justify-between'>
                            <p className='p-2 text-xl font-bold'>{project.name}</p>
                            <button className='hover:bg-black p-2' onClick={()=>handleDelete(project)}><AiOutlineDelete size={22} className='pt-1'/></button>
                        </div>
                        <p className='pl-2'>{project.description}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ProjectCard;