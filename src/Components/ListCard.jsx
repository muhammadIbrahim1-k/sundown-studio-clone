import React from 'react'

function ListCard({
    title,
    subHead,
    description,
    onMouseEnter,
    onMouseLeave,
}) {


    
  return (
    <div id='lisCon' className='hidden md:block' >
        
        <div className="h-[130px] w-full relative border-b border-[#38383864] overflow-hidden flex items-center px-[2vw] cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <div className="hoverEff h-full w-full bg-[#f6aa1e] absolute left-0 top-[-100%] transition-all ease-in duration-250"></div>
            <div className='flex w-full flex-row justify-between items-center relative z-9'>
                <h2 className='text-[3.2vw] relative'>{title}</h2>
                <div>
                    <h4 className='text-[15px] leading-[18px] font-light'>{subHead}</h4>
                    <p className='font-[50]	'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListCard