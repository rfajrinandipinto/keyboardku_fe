import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-80" />



    <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
      <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Discover the Art of Typing</h1>
      <p className="mt-4 text-xl text-white">
      Welcome to <span className="font-extrabold text-xl italic">KEYBOARD.KU</span> , where keyboards transcend ordinary typing and become a canvas for creativity. Elevate your typing experience with our curated collection of mechanical keyboards, each designed for enthusiasts, gamers, and professionals.
      </p>
      <a
        href="#"
        className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
      >
        Discover More
      </a>
    </div>
  </div>
  )
}

export default Hero