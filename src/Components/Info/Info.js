import React from 'react'
import './Info.css'
import ico from './assets/ic_outline-file-download.svg'
import img from './assets/Rectangle 4.svg'
import btn from './assets/btn.svg'
const Info = () => {
  return (
    <div className='text-white xl:ml-60 md:ml-[15vw] md:mr-8 justify-center sm:mt-20 pb-10' id='info'>
      <div className='lg:pt-5 pt-10 pl-10 lg:text-[25px] text-[20px]'>INTRODUCTION</div>
      <div className='md:inline-flex items-center justify-end'>
          <div className='heading pl-10 lg:text-[70px] md:text-[55px] text-[45px] font-[600]'>KNOW ME.</div> 
            <button className='flex space-x-1 items-center ml-10 mt-5 md:ml-[22vw] lg:ml-[28vw] xl:ml-[38vw]'>
              <img src={ico} alt='ico'/>
              <span className='lg:text-[20px] text-[15px]'>RESUME</span>
            </button>
      </div>
      <div className='md:flex md:space-x-20 px-10 lg:pt-10 pt-20 lg:text-[20px] md:text-[13px] text-[#D8FDF9]'>
          <p className='lg:w-[40vw]'>
           Hey, <br/><br/>This is Shree! Firstly being CSE student who’s into development..I’m a frontend web developer & designer with experience in Html, CSS, Javascript, ReactJS, Tailwind & Bootstrap. <br/><br/>I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>
          <img src={img} className='md:pt-0 pt-20 lg:w-[382px] md:w-[200px] w-[240px] items-center justify-center mx-auto' alt='img'/>
      </div>
      <div className='md:absolute md:right-0 items-center justify-center'>
          <img src={btn} className='xl:mr-[9vw] lg:mr-[3vw] md:mr-[4vw] mx-auto mt-12 xl:w-[10vw] lg:w-[15vw] md:w-[12vw] w-[120px]' alt='btn'/>
      </div>
    </div>
  )
}

export default Info