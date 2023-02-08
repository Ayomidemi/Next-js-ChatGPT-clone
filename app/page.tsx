import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center min-h-screen px-2'>
        <h1 className='text-4xl font-bold my-10'>ChatGPT</h1>

        <div className='space-x-4 text-center lg:flex items-start'>
         <div className='mb-8'>
          <div className='flex flex-col items-center justify-center mb-5'>
          <SunIcon className="h-8 w-8"/>
            <h2>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>"Explain something to me"</p>
            <p className='infoText'>"What is the difference between a dog and a cat?"</p>
            <p className='infoText'>"What is the color of the sun?"</p>
          </div>
         </div>

         <div className='mb-8'>
          <div className='flex flex-col items-center justify-center mb-5'>
          <BoltIcon className="h-8 w-8"/>
            <h2>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Change the GPT model to use</p>
            <p className='infoText'>Messages are stored in Firebase's Firestore</p>
            <p className='infoText'>Hot toast notification when ChatGPT is thinking!</p>
          </div>
         </div>

         <div className='mb-8'>
          <div className='flex flex-col items-center justify-center mb-5'>
          <ExclamationTriangleIcon className="h-8 w-8"/>
            <h2>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>May occationally generate incorrect information</p>
            <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
            <p className='infoText'>Limited knowledge of the world and evets after 2021</p>
          </div>
         </div>
        </div>
    </div>
  )
}

export default HomePage