import React, { useContext, useRef} from 'react';
import { BasicDetailContext } from '../../App';
import { EducationContext } from '../../App';
import { ExperienceContext } from '../../App';
import { ProjectContext } from '../../App';
import { SkillContext } from '../../App';
import { InterestContext } from '../../App';
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import ReactToPrint from 'react-to-print';

const Resume = () => {
  const [basicDetails] = useContext(BasicDetailContext);
  const [experience] = useContext(ExperienceContext);
  const [education] = useContext(EducationContext);
  const [projects] = useContext(ProjectContext);
  const [skills] = useContext(SkillContext);
  const [interests] = useContext(InterestContext);
  const componentRef=useRef();
  return (
    <div className='flex bg-gray-300 gap-10 h-150 w-full justify-center'>
      {/* <ReactToPrint trigger={()=><button className='bg-black text-white h-6 justify-end'>Download</button>} content={()=>componentRef.current}/> */}
      {basicDetails !== undefined ? (
        <div className='mt-20 mb-10 h-144 bg-white shadow-lg shadow-black'>
        <div className='w-130' ref={componentRef}>
          <div className='flex justify-between bg-orange-100'>
            <div className='flex flex-col justify-center pl-10'>
              <h1 className='font-bold text-4xl capitalize pt-10 pb-1'>{basicDetails[0].fname} {basicDetails[0].lname}</h1>
              <h1 className='text-lg capitalize pb-10'>{basicDetails[0].tagline}</h1>
            </div>
            <div className='flex flex-col justify-center pr-10'>
              <div className='flex gap-2 items-center'>
                <FaPhoneAlt size={18} />
                <p>{basicDetails[0].contact}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <MdMail size={20} />
                <p>{basicDetails[0].email}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <FaLinkedin size={20} />
                <p>{basicDetails[0].linkedIn}</p>
              </div>
            </div>
          </div>
          <div className='border-b-2 border-gray-300'></div>
          <div className='flex flex-col pt-2'>
            <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-24'>Objective</h1>
            <p className='pl-8 pr-8 text-sm'>{basicDetails[0].objective}</p>
          </div>
          <div className='border-b-2 border-gray-300 py-1'></div>
          {experience.length > 0 ? (
            <div className='flex flex-col pt-2'>
              <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-24'>Experience</h1>
              {
                experience.map(exp => {
                  return (
                    <div key={exp.name} className='flex flex-col'>
                      <div className='flex justify-between'>
                        <p className='pl-5 font-bold text-lg'>{exp.name}</p>
                        <p className='pr-5 text-gray-400 text-sm'>{exp.duration}</p>
                      </div>
                      <p className='pl-8 text-sm'>{exp.role}</p>
                    </div>
                  )
                })
              }
              <div className='border-b-2 border-gray-300 py-1'></div>
            </div>) : (<div></div>)
          }
          {education.length > 0 ? (
            <div className='flex flex-col pt-2'>
              <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-24'>Education</h1>
              {
                education.map(edu => {
                  return (
                    <div key={edu.name} className='flex flex-col'>
                      <div className='flex justify-between'>
                        <p className='pl-5 font-bold text-lg'>{edu.name}</p>
                        <p className='pr-5 text-gray-400 text-sm'>{edu.duration}</p>
                      </div>
                      <p className='pl-8 text-sm'>{edu.type}</p>
                      <p className='pl-8 text-sm'>{edu.result}</p>
                    </div>
                  )
                })
              }
              <div className='border-b-2 border-gray-300 py-1'></div>
            </div>) : (<div></div>)
          }
          {projects.length > 0 ? (
            <div className='flex flex-col pt-2'>
              <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-20'>Projects</h1>
              {
                projects.map(project => {
                  return (
                    <div key={project.name} className='flex flex-col'>
                      <p className='pl-5 font-bold text-lg'>{project.name}</p>
                      <div className='h-fit w-fit'><p className='pl-8 pr-8 text-sm'>{project.description}</p></div>
                    </div>
                  )
                })
              }
              <div className='border-b-2 border-gray-300 py-1'></div>
            </div>) : (<div></div>)
          }
          {skills.length > 0 && interests.length > 0 ? (
            <div className='flex justify-around pt-2'>
              <div className='pl-5'>
                <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-16'>Skills</h1>
                {
                  skills.map(skill => {
                    return (
                      <li key={skill}>{skill}</li>
                    )
                  })
                }
              </div>

              <div className='border-2 border-gray-300'></div>

              <div className='justify-self-start'>
                <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-20'>Interests</h1>
                {
                  interests.map(interest => {
                    return (
                      <li key={interest}>{interest}</li>
                    )
                  })
                }
              </div>
              <div className='border-b-2 border-gray-300'></div>
            </div>) : (<div></div>)
          }
          {skills.length>0 && interests.length===0 ? (
            <div className='pt-2'>
              <div className='pl-5'>
                <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-16'>Skills</h1>
                {
                  skills.map(skill => {
                    return (
                      <li key={skill}>{skill}</li>
                    )
                  })
                }
              </div>
            </div>):(<div></div>)
          }
          {interests.length>0 && skills.length===0 ? (
            <div className='pt-2'>
              <div className='pl-5'>
                <h1 className='flex justify-center text-lg rounded-lg bg-orange-100 w-20'>Interests</h1>
                {
                  interests.map(interest => {
                    return (
                      <li key={interest}>{interest}</li>
                    )
                  })
                }
              </div>
            </div>):(<div></div>)
          }
        </div>
        </div>
      ) : (
        <div className='mt-20 mb-10 h-144  shadow-lg shadow-black bg-white w-130'>
          <div className='h-36 bg-orange-100'></div>
        </div>
      )}
    <ReactToPrint trigger={()=><button className='h-6 bg-white hover:shadow-xl hover:h-7 shadow-black  px-1 mt-20 rounded-lg'>Download</button>} content={()=>componentRef.current}/>
    </div>
  )
}

export default Resume;