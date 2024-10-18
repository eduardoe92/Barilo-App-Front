import userImg from '@/assets/images/excursionCard.webp'

import { BsCheckCircle, BsXCircle } from 'react-icons/bs'

interface GroupActivityProps {
  name: string;
  date: string;
  description: string;
}

function GroupActivity({name, date, description}: GroupActivityProps) {
  
    return (
      <div className="flex border bg-inactive-button-bg rounded-2xl p-1.5 mb-2 gap-2">
        <img src={userImg} alt="User image" className="w-20 rounded-2xl"/>
        <div className='flex justify-between w-full p-2 ml-2 bg-white rounded-2xl'>
          <div className='flex flex-col justify-center h-16 gap-1 pl-2'>
            <p className="font-bold leading-none text-secondary-celeste">{name}</p>
            <p className="text-sm text-primary-celeste leading-1">{date}</p>
            <p className="text-sm text-primary-celeste leading-1">{description}</p>
          </div>
          <div className='flex flex-col justify-between py-1 pr-2'>
            <BsCheckCircle className='text-primary-blue'/>
            <BsXCircle className='text-primary-blue'/>
          </div>
        </div>   
      </div>
    )
  }
  
  export default GroupActivity