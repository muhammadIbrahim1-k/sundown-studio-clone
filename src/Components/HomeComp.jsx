import React, {useState} from 'react'
import { sundownVid, OrangePoint, ListCard, ListImageCard, Nyfw, Conversesoho, KelceSuperBowl, PlayNewKid, CarmeloAnth, Capezio, Footer, SwipeCard, ListCardMob } from './index'

function HomeComp() {
  const [isHovered, setIsHovered] = useState(null)

  return (
    <>
    
      <div className='relative z-10'>
        <div id='hero1' className='px-9 min-h-screen w-[100vw] md:min-h-screen md:w-full bg-[#EFEAE3]'>
          <div id='center' className='z-9 md:w-full w-full border-b-2 border-[#00000020] h-[62vh] md:h-[82vh] flex flex-col-reverse justify-between md:flex md:flex-row md:items-end md:justify-between py-[7vw] pb-[10vh] relative	md:pb-[3.5vw] '>
              <div id='left'>
                  <h3 className='w-[80%] md:w-[25vw] text-[5.5vw] md:text-[1.8vw] leading-[6vw] md:leading-[2vw]'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
              </div>
              <div id='right' className='md:text-[10vw] leading-[17vw] text-[17vw] md:leading-[8vw] text-right' >
                  <h1>
                  SPACES <br />
                  THAT <br />
                  INSPIRE
                  </h1>
              </div>

          </div>
          <div id='main-shape' className='absolute w-[46vw] h-[36vw] right-0 md:top-[65vh] top-[44vh]'>
            <div id='shape1' className='bg-[#fe330a] absolute h-full w-full rounded-l-[50%] blur-md '></div>
            <div id='shape2' className='bg-[#fe4b0a] absolute w-[30vw] rounded-full h-[30vw] blur-[25px]'></div>
            <div id='shape3' className='bg-[#fe3f0a] absolute w-[30vw] rounded-full h-[30vw] blur-[25px]'></div>
          </div>
          <video autoPlay muted loop className=' relative md:rounded-3xl rounded-2xl mt-[4vw] md:w-full w-[92%] h-[70vh] md:h-full object-cover object-center md:ml-[0] ml-[4%]	' src={sundownVid}></video>
        </div>
        <div id='hero2' className='min-h-screen w-full relative md:py-[6vw] py-[8vw] bg-[#EFEAE3]'>
          <div id='movingText' className='overflow-x-auto	whitespace-nowrap	'>
            <div className='slideText whitespace-nowrap inline-block'>
              <h1 className='md:text-[8vw] text-[15vw] inline-block' >EXPERIENCES</h1>
              <OrangePoint/>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>CONTENT</h1>
              <OrangePoint/>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>ENVIRONMENTS</h1>
              <OrangePoint/>
            </div>
            <div className='slideText whitespace-nowrap inline-block'>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>EXPERIENCES</h1>
              <OrangePoint/>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>CONTENT</h1>
              <OrangePoint/>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>ENVIRONMENTS</h1>
              <OrangePoint/>
            </div>
            <div className='slideText whitespace-nowrap inline-block'>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>EXPERIENCES</h1>
              <OrangePoint/>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>CONTENT</h1>
              <OrangePoint/>
              <h1 className='md:text-[8vw] text-[15vw] inline-block'>ENVIRONMENTS</h1>
              <OrangePoint/>
            </div>
          </div>
          <div id='hero2Bottom' className='h-[80vh] w-full py-[10vw] px-[4vw] md:p-[6vw] flex flex-col md:flex-row justify-between items-start	md:items-center relative z-10'>
            <h1 className='md:text-[4vw] text-[8.2vw] w-full leading-[9vw] md:leading-[4vw] md:w-[60%]'>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>
            <div className='md:w-[20%] w-[70%] mt-[20vw]'>
              <img className='rounded-xl md:rounded-2xl	w-full' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" alt="img" />
              <p className='font-extralight	mt-[2vw] text-[3.5vw] md:text-[1vw]'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
            </div>
          </div>
          <div id='hero2Shape' className='h-[70vw] w-[70vw] md:h-[32vw] md:w-[32vw] blur-[30px] top-[40%] left-[30%] md:top-[58%] md:left-[23%] absolute rounded-full bg-gradient-to-tr from-[#ff0303] to-[#ff5c0b]'></div>
        </div>
        <div id='hero3' className='min-h-screen w-full  bg-[#EFEAE3]'>
          <div className='flex py-[2vw] gap-x-2 pt-[6rem] items-center pl-[2vw]'>
            <div className='h-[10px] w-[10px] rounded-full bg-[#fe330a] '></div>
            <p className='font-extralight text-[3vw] md:text-[1vw] '>FEATURED PROJECTS</p>
          </div>
          <div className='hidden md:block'>
            <ListCard
            title={`NYFW Popup`}
            subHead={`AFTER PAY`}
            description={`Experiential`}
            onMouseEnter={()=>setIsHovered(Nyfw)}
            onMouseLeave={()=>setIsHovered(null)}
            />
            {isHovered ===Nyfw && <ListImageCard
            videoAddress={Nyfw}
            />}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
              title={`NYFW Popup`}
              subHead={`AFTER PAY`}
              description={`Experiential`}
              videoAddress={Nyfw}
            />
          </div>
                
          <div className='hidden md:block'>
            <ListCard
            title={`Converse SoHo`}
            subHead={`CONVERSE`}
            description={`Environment`}
            onMouseEnter={()=>setIsHovered(Conversesoho)}
            onMouseLeave={()=>setIsHovered(null)}
            />
            {isHovered === Conversesoho && <ListImageCard        
            videoAddress={Conversesoho}
            />}
          </div>
          <div className='md:hidden block'>
            <ListCardMob 
                        title={`Converse SoHo`}
                        subHead={`CONVERSE`}
                        description={`Environment`}
                        videoAddress={Conversesoho}
            />
          </div>
          
          <div className='hidden md:block'>
            <ListCard
                title={`Play New KidVision`}
                subHead={`NIKE`}
                description={`Environment`}
                onMouseEnter={()=>setIsHovered(PlayNewKid)}
                onMouseLeave={()=>setIsHovered(null)}
                />
                {isHovered  === PlayNewKid && <ListImageCard
                videoAddress={PlayNewKid}
            />}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
                            title={`Play New KidVision`}
                            subHead={`NIKE`}
                            description={`Environment`}
                            videoAddress={PlayNewKid}
            />
          </div>

          <div className='hidden md:block'>
            <ListCard
            title={`Kelce Super Bowl Party`}
            subHead={`WAVE SPORTS ENTERTAINMENT`}
            description={`Experiential`}
            onMouseEnter={()=>setIsHovered(KelceSuperBowl)}
            onMouseLeave={()=>setIsHovered(null)}
            />
            {isHovered  === KelceSuperBowl && <ListImageCard
            
            videoAddress={KelceSuperBowl}
            />}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
                        title={`Kelce Super Bowl Party`}
                        subHead={`WAVE SPORTS ENTERTAINMENT`}
                        description={`Experiential`}
                        videoAddress={KelceSuperBowl}
            />
          </div>

          <div className='hidden md:block'>
            <ListCard
            title={`Carmelo Anthony 7pm In Brooklyn Set`}
            subHead={`WAVE SPORTS ENTERTAINMENT`}
            description={`Environment`}
            onMouseEnter={()=>setIsHovered(CarmeloAnth)}
            onMouseLeave={()=>setIsHovered(null)}
            />
            {isHovered === CarmeloAnth && <ListImageCard videoAddress={CarmeloAnth}/>}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
                        title={`Carmelo Anthony 7pm In Brooklyn Set`}
                        subHead={`WAVE SPORTS ENTERTAINMENT`}
                        description={`Environment`}
                        videoAddress={CarmeloAnth}
            />
          </div>
          

          <div className='hidden md:block'>
            <ListCard
            title={`Capezio NYC Flagship`}
            subHead={`CAPEZIO`}
            description={`Environment`}
            onMouseEnter={()=>setIsHovered(Capezio)}
            onMouseLeave={()=>setIsHovered(null)}
            />
            {isHovered === Capezio && <ListImageCard videoAddress={Capezio}/>}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
                        title={`Capezio NYC Flagship`}
                        subHead={`CAPEZIO`}
                        description={`Environment`}
                        videoAddress={Capezio}
            />
          </div>
          

          <div className='hidden md:block'>
            <ListCard
            title={`50th Anniversary`}
            subHead={`NIKE`}
            description={`Environment`}
            onMouseEnter={()=>setIsHovered(KelceSuperBowl)}
            onMouseLeave={()=>setIsHovered(null)}/>
            {isHovered === KelceSuperBowl && <ListImageCard videoAddress={KelceSuperBowl}/>}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
                        title={`50th Anniversary`}
                        subHead={`NIKE`}
                        description={`Environment`}
                        videoAddress={KelceSuperBowl}
            />
          </div>

          <div className='hidden md:block'>
            <ListCard
            title={`Makers Studio HOI`}
            subHead={`NIKE`}
            description={`Experiential`}
            onMouseEnter={()=>setIsHovered(PlayNewKid)}
            onMouseLeave={()=>setIsHovered(null)}
            />
            {isHovered === PlayNewKid && <ListImageCard videoAddress={PlayNewKid}/>}
          </div>
          <div className='md:hidden block'>
            <ListCardMob
                        title={`Makers Studio HOI`}
                        subHead={`NIKE`}
                        description={`Experiential`}
                        videoAddress={PlayNewKid}
            />
          </div>
          
        </div>
        <div id='hero5' className='md:h-[80vh] py-[12vw] w-full bg-[#EFEAE3]'>
          <div className='flex py-8 gap-x-2 items-center pl-[2vw]'>
            <div className='h-[10px] w-[10px] rounded-full bg-[#fe330a] '></div>
            <p className='font-extralight text-[3vw] md:text-[1vw] '>WHO WE WORK WITH</p>
          </div>
          <SwipeCard/>
        </div>
        <div id='hero6' className='h-screen w-full'></div>
      </div>
      <Footer/>
    </>
  )
}

export default HomeComp