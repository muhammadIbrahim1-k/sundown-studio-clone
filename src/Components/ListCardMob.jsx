import React from 'react'
import { Capezio } from '.'

function ListCardMob({title, subHead, description, videoAddress}) {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <video autoPlay muted loop className=' rounded-2xl mt-[4vw] w-[92%] h-[70vh] object-cover ' src={videoAddress}></video>
            <div className='w-[92%] pt-5 pb-10'>
                <h2 className='text-[8vw]'>{title}</h2>
                <h4 className='text-[15px] leading-[18px] font-light'>{subHead}</h4>
                <p className='font-[50] text-[10px]'>{description}</p>  
            </div>
        </div>
    </div>
  )
}

export default ListCardMob