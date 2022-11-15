import React, {useContext} from 'react';
import { BasicDetailContext } from '../../App';
import { DisplayContext } from '../../App';

const BasicInfo = () => {
    const [basicDetails,setBasicDetails]=useContext(BasicDetailContext);
    const [save,setSave,display,setDisplay,fname,setFname,lname,setLname,email,setEmail,contact,setContact,tagline,setTagline,linkedIn,setLinkedIn]=useContext(DisplayContext);
    const handleSubmit=(e)=>{
        if(fname!=='' && lname!=='' && tagline!=='' && contact!=='' && email!=='' && linkedIn!=='')
        {
            setBasicDetails([{
                fname:fname,
                lname:lname,
                tagline:tagline,
                contact:contact,
                email:email,
                linkedIn:linkedIn
            }])
            setSave(false);
            setDisplay(true);
        }
        else{
            alert("All fields are mandatory");
        }
        e.preventDefault();
    }
    console.log(basicDetails);
    const handleSave=(e)=>{
        setSave(true);
        setDisplay(false);
        e.preventDefault();
    }
    return (
    <div className='bg-gray-300 h-screen'>
    {save &&
      <div className='flex flex-col items-center pt-20 gap-5'>
        <div className='flex gap-4'>
          <p>First Name:</p>
          <input className='rounded' onChange={e=>setFname(e.target.value)} value={fname} placeholder="John" type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Last Name:</p>
          <input className='rounded' onChange={e=>setLname(e.target.value)} value={lname} placeholder="Williams" type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Tag Line:</p>
          <input className='rounded' onChange={e=>setTagline(e.target.value)} value={tagline} placeholder="Software Engineer" type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Contact Number:</p>
          <input className='rounded' onChange={e=>setContact(e.target.value)} value={contact} placeholder='9999999999' type="text"/>
        </div>
        <div className='flex gap-4'>
          <p>Email:</p>
          <input className='rounded' onChange={e=>setEmail(e.target.value)} value={email} placeholder="john@gmail.com" type="email"/>
        </div>
        <div className='flex gap-4'>
          <p>LinkedIn URL:</p>
          <input className='rounded' onChange={e=>setLinkedIn(e.target.value)} value={linkedIn} placeholder="www.linkedin.com/john" type="text"/>
        </div>
        <div className='flex gap-4 pt-5'>
            <button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSubmit}>Save</button>
        </div>
      </div>
    }


   {display &&
      <div className='flex flex-col items-center pt-20 gap-5'>
        <div className='flex gap-4'>
          <p>First Name:</p>
          <p>{fname}</p>
        </div>
        <div className='flex gap-4'>
          <p>Last Name:</p>
          <p>{lname}</p>
        </div>
        <div className='flex gap-4'>
          <p>Tag Line:</p>
          <p>{tagline}</p>
        </div>
        <div className='flex gap-4'>
          <p>Contact Number:</p>
          <p>{contact}</p>
        </div>
        <div className='flex gap-4'>
          <p>Email:</p>
          <p>{email}</p>
        </div>
        <div className='flex gap-4'>
          <p>LinkedIn URL:</p>
          <p>{linkedIn}</p>
        </div>
        <div className='flex gap-4 pt-5'>
          <button className='hover:bg-black hover:w-12 text-white px-2 rounded-lg bg-gray-700' onClick={handleSave}>Edit</button>
        </div>
      </div>
    }

    </div>
    )
}

export default BasicInfo