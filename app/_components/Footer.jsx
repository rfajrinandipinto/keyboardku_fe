'use client'

import React from 'react'
import { useState, useEffect } from 'react'

const Footer = () => {
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
         <footer className="bg-gray-900 mt-20">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8 ">
      <p className='font-extrabold text-3xl italic text-center mb-10  '>KEYBOARD.KU</p>

        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {categories.map((category) => (
            <div key={category.name} className="pb-6">
              <a href={category.href} className="uppercase font-bold text-sm leading-6 text-white ">
                {category.name}
              </a>
            </div>
          ))}
        </nav>
        
        <p className="mt-10 text-center text-xs leading-5 text-white">
          &copy; 2024 Keyboard.ku, Inc. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Footer