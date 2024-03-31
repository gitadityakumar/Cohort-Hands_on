import React from 'react'


export default function Aboutlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <>
    <nav className="px-2 py-2 border-b bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-center space-x-3 ">
      <span className="text-purple-600">About NavBar</span>
        <h1 className="text-xl flex justify-center animate-pulse">50% off on new courses</h1>
    </nav>

    <main>
        {children}
    </main>
    </>
  )
}
