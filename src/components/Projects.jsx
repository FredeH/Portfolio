import React from 'react'

const Projects = () => {
  return (
    <div className='flex justify-center'>     
      <div className='grid grid-flow-row grid-rows-2 grid-cols-2 gap-8 pt-[100px]'>

        <a href='#/Projects/VRDK' className='hover:scale-110 hover:z-10 duration-300'>
          <div className='bg-gray-700 drop-shadow-2xl rounded-3xl w-[400px] h-[400px]'>
            <h1 className='text-white flex justify-center pt-4 font-bold text-3xl'>VRDK</h1>
          </div>
        </a>

        <a href='#/Projects/CAF' className='hover:scale-110 hover:z-10 duration-300'>
          <div className='bg-gray-700 drop-shadow-2xl rounded-3xl w-[400px] h-[400px]'>
            <h1 className='text-white flex justify-center pt-4 font-bold text-3xl'>CAF mod</h1>
          </div>
        </a>

        <a href='#/Projects/GM' className='hover:scale-110 hover:z-10 duration-300'>
          <div className='bg-gray-700 drop-shadow-2xl rounded-3xl w-[400px] h-[400px]'>
            <h1 className='text-white flex justify-center pt-4 font-bold text-3xl'>GM AR</h1>
          </div>
        </a>

        <a href='#/Projects/Makerlab' className='hover:scale-110 hover:z-10 duration-300'>
          <div className='bg-gray-700 drop-shadow-2xl rounded-3xl w-[400px] h-[400px]'>
            <h1 className='text-white flex justify-center pt-4 font-bold text-3xl'>Makerlab VR sim</h1>
          </div>
        </a>

      </div>
    </div>

  )
}

export default Projects
