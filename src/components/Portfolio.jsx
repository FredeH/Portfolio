import React from 'react'
import MP40 from '../assets/rkgldypd.bmp'
import ColtNavy from '../assets/9yvicj65.bmp'
import M9A1 from '../assets/xqc31gps.bmp'

const Portfolio = () => {
  return (
    <div className='text-white pt-[100px]'>
      <div className='grid-flow-row grid-col-4 grid-rows-4 justify-center flex gap-4'>

        <a href='https://www.artstation.com/artwork/mqw0la'>
          <div className='w-[400px] hover:scale-105 duration-300'>
            <img className='rounded-3xl drop-shadow-xl' src={MP40} alt="/" />
          </div>
        </a>

        <a href='https://www.artstation.com/artwork/P9yg8'>
          <div className='w-[400px] hover:scale-105 duration-300'>
            <img className='rounded-3xl drop-shadow-xl' src={ColtNavy} alt="/" />
          </div>
        </a>

        <a href='https://www.artstation.com/artwork/0bVDw'>
          <div className='w-[400px] hover:scale-105 duration-300'>
            <img className='rounded-3xl drop-shadow-xl' src={M9A1} alt="/" />
          </div>
        </a>
        
      </div>
    </div>
  )
}

export default Portfolio
