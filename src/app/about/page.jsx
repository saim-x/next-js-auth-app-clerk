import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col p-4 mt-4 w-full '>
      <h1 className='text-2xl font-semibold text-gray-800'>About</h1>
      <p className='mt-2 text-gray-600'>
        This is a simple authentication app built with Next.js and Clerk.
      </p>
    </div>
  );
}
