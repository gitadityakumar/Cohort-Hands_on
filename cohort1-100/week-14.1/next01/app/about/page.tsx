import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <main className='flex  flex-col items-center justify-between p-5'>
    <h1 className='flex justify-center text-4xl p-4 '>About</h1>
    <Link href="/" className='bg-gray-500 p-2 rounded'>Go to Home Page</Link>
    </main>
    
    </>
  )
}
