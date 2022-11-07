import React from 'react'
import Rely from '../assets/RelyChairRender.webp'

const WebAR = () => {
    return (
        <div className='w-full bg-[#1f1f23] text-white'>
            <div className='flex-col'>
                <h1 className='flex justify-center font-bold text-3xl pt-4'>WebAR Examples</h1>
                <h2 className='flex justify-center pb-4 opacity-50'>Android only</h2>
            </div>
            <div className='overflow-hidden grid py-4 px-11 gap-4 md:grid-cols-4 sm:grid-cols-2'>

                <div className='w-full hover:z-10 hover:scale-105 duration-300'>
                    <a href='intent://arvr.google.com/scene-viewer/1.2?file=https://raw.githubusercontent.com/FredeH/WebAR/main/android/Rely_Armchair.gltf&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;'>
                    <img className='rounded-3xl drop-shadow-lg' src={Rely} alt="/" />
                    </a>
                    <p className='flex justify-center font-bold py-2'> &Tradition Rely</p>
                </div>
                
            </div>
        </div>
    )
}

export default WebAR
