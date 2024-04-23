import React,{useState} from 'react'

function ListImageCard({videoAddress}) {

  return (
  <>
    <div className='cursor-pointer h-[30vw] w-[24vw] fixed left-[50%] top-[25%] bg-cover bg-center rounded-3xl z-[99]'>
        <video autoPlay muted loop className='h-full w-full object-cover rounded-3xl' src={videoAddress}></video>
        </div>
    </>
  )
}

export default ListImageCard