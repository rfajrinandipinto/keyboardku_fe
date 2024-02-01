'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
  } from '@heroicons/react/24/outline'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/categories');
            const data = await response.json();
            setCategories(data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        }

        fetchCategories();
        
    },[])

  return (
    <div className="relative bg-gray-900">

    <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-80" />

    <header className="relative z-10">
      <nav aria-label="Top">


        {/* Secondary navigation */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex h-16 items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="#">
                    <span className="sr-only">KEYBOARD.KU</span>
                    <p className='font-extrabold text-xl italic'>KEYBOARD.KU</p>
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Flyout menus */}
                  <div className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8">
                      {categories.map((category) => (

                        <div className="flex" key={category.name}>
                            <div className="realtive flex">
                                <a href={'/products?category=' + category.id} className="uppercase relative z-10 flex items-center justify-center text-sm font-bold text-white transition-colors duration-200 ease-out">
                                    {category.name}
                                </a>
                            </div>

                        </div>

                       
                      ))}

                     
                    </div>
                  </div>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex flex-1 items-center lg:hidden">
                  <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  {/* <a href="#" className="ml-2 p-2 text-white">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a> */}
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Your Company</span>
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" className="h-8 w-auto" />
                </a>

                <div className="flex flex-1 items-center justify-end">
                

                  <div className="flex items-center lg:ml-8">

                    <div className="ml-4 flow-root lg:ml-8 ">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <UserIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                        <span className="ml-2 text-sm font-medium text-white">Login / Register</span>
                      </a>
                    </div>
                  

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-8">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                        <span className="ml-2 text-sm font-medium text-white">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>

                   
                  </div>
                </div>


                <div className="ml-6 p-6 bg-white h-full flex items-center">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <MagnifyingGlassIcon className="h-6 w-6 flex-shrink-0 text-gray-900 " aria-hidden="true" />
                       
                      </a>
                </div>
                
              </div>
            </div>
          </div>
         
        </div>
      </nav>
    </header>

   
  </div>
  )
}

export default Navbar