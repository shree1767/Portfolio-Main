import React from 'react'
import { Link } from 'react-router-dom'
import './Works.css'

const Works = () => {
  return (
    <div className='text-white xl:ml-60 md:ml-[15vw] md:mr-8 justify-center md:mt-20 mt-[20vh] md:pb-[13vh]' id='works'>
        <div className='lg:pt-5 pt-10 pl-10 lg:text-[25px] text-[20px]'>MY WORK</div>
        <div className='heading pl-10 lg:text-[70px] md:text-[55px] text-[45px] font-[600]' >PORTFOLIO.</div> 
        <div className='pt-20 md:grid-cols-3 grid grid-cols-1 xl:space-x-5 lg:space-x-3 md:space-y-0 space-y-10 justify-center xl:text-[35px] text-[20px] font-[400] justify-center'>
            <Link to='/Webdev' className='mx-auto'><button className='box mx-auto bg-[#262A2B] lg:w-[20vw] lg:h-[45vh] w-[150px] h-[220px] items-center justify-center'>WEB DEV</button></Link>
            <Link to='/UIUX' className='mx-auto'><button className='box mx-auto bg-[#262A2B] lg:w-[20vw] lg:h-[45vh] w-[150px] h-[220px] items-center justify-center'>UI/UX</button></Link>
            <Link to='/Games' className='mx-auto'><button className='box mx-auto bg-[#262A2B] lg:w-[20vw] lg:h-[45vh] w-[150px] h-[220px] items-center justify-center'>GAMES</button></Link>
        </div>
    </div>
  )
}

export default Works