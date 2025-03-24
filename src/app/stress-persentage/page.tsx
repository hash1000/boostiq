import Container from '@/components/container'
import React from 'react'

export default function page() {
  return (
    <Container>
        <div className='p-14 flex flex-col gap-10'>
            <h2 className='text-center md:text-2xl 3xl:text-xxl font-semibold'>STRESS RATIO CALCULATOR</h2>
            <div className='flex-1 flex justify-center items-center'>
               
               <div className='bg-[#A0E4FF] md:h-[400px] md:w-[400px] 3xl:w-[600px] 3xl:h-[600px] rounded-full flex flex-col justify-center items-center'>
                <div>
                <label className='text-[200px] 3xl:text-[300px] text-white'>56</label><span className='md:text-4xl 3xl:text-6xl text-white'>%</span>
                </div>
                <br/>
                <h2 className='md:text-6xl 3xl:text-8xl text-white  md:pb-2.5 3xl:pb-5 '>High</h2>
               </div>
            </div>
        </div>
    </Container>
  )
}
