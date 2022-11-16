import React,{useContext} from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { InterestContext } from '../../App';

const InterestCard = () => {
    const [interests,setInterests]=useContext(InterestContext);
    const handleDelete=(interest)=>{
        setInterests(interests.filter(item => item !== interest))
    }
    return (
        <div className='grid grid-cols-1 gap-2'>
            {
                interests.map((interest)=>{
                    return( 
                        <div className='flex bg-gray-500 text-white justify-between rounded-md overflow-hidden'>
                            <div className='px-3 rounded'>{interest}</div>
                            <button className='hover:bg-black' onClick={()=>handleDelete(interest)}><AiOutlineDelete size={22} className='pt-1'/></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InterestCard;