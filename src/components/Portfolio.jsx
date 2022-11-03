import React from 'react'
import MP40 from '../assets/rkgldypd.webp'
import ColtNavy from '../assets/9yvicj65.webp'
import M9A1 from '../assets/xqc31gps.webp'

const Portfolio = () => {
  return (
    <div className='text-white mt-6'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>

        <a href='https://www.artstation.com/artwork/mqw0la'>
          <div 
          style={{backgroundImage: `url(${MP40})`}}
          className='group rounded-3xl drop-shadow-xl portfolio-div hover:scale-105 duration-300 container'>
            
            <div 
            className='opacity-0 flex justify-center portfolio-div hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500'>
              <h1 className='fixed mb-3 bottom-0 font-bold text-2xl'>MP40</h1>
            </div>
          </div>
        </a>

        <a href='https://www.artstation.com/artwork/P9yg8'>
        <div 
          style={{backgroundImage: `url(${ColtNavy})`}}
          className='rounded-3xl drop-shadow-xl portfolio-div hover:scale-105 duration-300 container'>
          
          <div 
            className='opacity-0 flex justify-center portfolio-div hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500'>
              <h1 className='fixed mb-3 bottom-0 font-bold text-2xl'>Colt Navy</h1>
            </div>

          </div>
        </a>

        <a href='https://www.artstation.com/artwork/0bVDw'>
        <div 
          style={{backgroundImage: `url(${M9A1})`}}
          className='rounded-3xl drop-shadow-xl portfolio-div hover:scale-105 duration-300 container'>
          
          <div 
            className='opacity-0 flex justify-center portfolio-div hover-div hover:opacity-100 rounded-3xl ease-in-out duration-500'>
              <h1 className='fixed mb-3 bottom-0 font-bold text-2xl'>M9A1</h1>
            </div>
          </div>
        </a>
        
      </div>
    </div>
  )
}

export default Portfolio
