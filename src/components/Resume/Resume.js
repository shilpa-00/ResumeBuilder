import React,{useContext} from 'react';
import {BasicDetailContext} from '../../App';
import { EducationContext } from '../../App';
import { ExperienceContext } from '../../App';
import {FaPhoneAlt, FaLinkedin} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';

const Resume = () => {
  const [basicDetails]=useContext(BasicDetailContext);
  const [experience]=useContext(ExperienceContext);
  const [education]=useContext(EducationContext);
  console.log(education);
  return (
    <div className='flex bg-gray-300 h-144 w-full justify-center'>
      <div className='bg-white mt-10 mb-10 w-1/2 min-w-fit shadow-lg shadow-black'>
        <div className='flex justify-between bg-orange-100'>
          <div className='flex flex-col justify-center pl-10'>
            <h1 className='font-bold text-4xl capitalize pt-10 pb-1'>{basicDetails[0].fname} {basicDetails[0].lname}</h1>
            <h1 className='text-lg capitalize pb-10'>{basicDetails[0].tagline}</h1>
          </div>
          <div className='flex flex-col justify-center pr-10'>
            <div className='flex gap-2 items-center'>
              <FaPhoneAlt size={18}/>
              <p>{basicDetails[0].contact}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdMail size={20}/>
              <p>{basicDetails[0].email}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaLinkedin size={20}/>
              <p>{basicDetails[0].linkedIn}</p>
            </div>
          </div>
        </div>
        <div className='border-b-2 border-gray-300'></div>
        {experience.length>0?(
          <div className='flex flex-col'>
            <h1 className='text-lg bg-orange-100 w-24'>Experience</h1>
            {
              experience.map(exp=>{
                return(
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
            <div className='border-b-2 border-gray-300'></div>
          </div>):(<div></div>)
        }
        {education.length>0?(
          <div className='flex flex-col'>
            <h1 className='text-lg bg-orange-100 w-24'>Education</h1>
            {
              education.map(edu=>{
                return(
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
            <div className='border-b-2 border-gray-300'></div>
          </div>):(<div></div>)
        }
        {/* <div className='flex justify-between'>
          <div>
            <h1 className='text-lg bg-orange-100 w-24'>Skills</h1>
          </div>
          <div>
            <h1 className='text-lg bg-orange-100 w-24 justify-self-start'>Interests</h1>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Resume;