'use client'

import React from 'react'

import { useState, useEffect } from 'react'
import Link from 'next/link';

import {
    PlusIcon
  } from '@heroicons/react/24/outline'


const page = (props) => {

    var parameter = props.searchParams

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);


    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    var url = 'http://127.0.0.1:8000/api/products?'

    if(parameter.category){
        url += 'category=' + parameter.category + '&'
    }

    if(parameter.sort){
        url += 'sort=' + parameter.sort + '&'
    }

    if(parameter.brand){
        url += 'brand=' + parameter.brand + '&'
    }

    if(parameter.keyword){
        url += 'keyword=' + parameter.keyword + '&'
    }

   

    useEffect(() => {
        const fetchProducts = async () => {
            try {
              const response = await fetch(url);
              const data = await response.json();
      
              setProducts(data['products']);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
      
          fetchProducts();

        
          const fetchBrands = async () => {
            try {
              const response = await fetch('http://127.0.0.1:8000/api/available-brands');
              const data = await response.json();

              setBrands(data['brands']);
      
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
      
          fetchBrands();

          const fetchCategories = async () => {
            try {
              const response = await fetch('http://127.0.0.1:8000/api/categories');
              const data = await response.json();
              setCategories(data);
            } catch (error) {
              console.error('Error fetching categories:', error);
            }
          };
      
          fetchCategories();

          
    },[])



    const handleCheckboxChange = (category) => {
       
        const isSelected = selectedCategories.includes(category.id);
        const updatedCategories = isSelected
          ? selectedCategories.filter((selected) => selected !== category.id)
          : [...selectedCategories, category.id];
    
        setSelectedCategories(updatedCategories);

      };

      const handleBrandCheckboxChange = (brand) => {
        const isSelected = selectedBrands.includes(brand);
        const updatedBrands = isSelected
          ? selectedBrands.filter((selected) => selected !== brand)
          : [...selectedBrands, brand];
    
        setSelectedBrands(updatedBrands);
      };




      useEffect(() => {

        url = 'http://127.0.0.1:8000/api/products?'

        if(parameter.sort){
            url += 'sort=' + parameter.sort + '&'
        }
    
        if(parameter.brand){
            url += 'brand=' + parameter.brand + '&'
        }
    
        if(parameter.keyword){
            url += 'keyword=' + parameter.keyword + '&'
        }

        if (selectedCategories.length > 0) {

            url += `category[]=${selectedCategories.join('&category[]=')}&`
          
          } 

          if (selectedBrands.length > 0) {

            url += `brand[]=${selectedBrands.join('&brand[]=')}&`
          
          } 

          console.log(url)


          fetch(url)
          .then(response => response.json())
          .then(data => setProducts(data.products))
          .catch(error => console.error('Error fetching products:', error));

         




      

      },[selectedCategories, selectedBrands]);

      
   


  return (
    <div className="bg-white">
               <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pt-20 pb-10">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center">Our Products</h1>
           
          </div>

          <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">Filters</span>
                <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              </button>

              <div className="hidden lg:block">
               

                <form className="space-y-10 divide-y divide-gray-200">
          
                    <div  className='pt-10'>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">Brands</legend>
                        <div className="space-y-3 pt-6">
                            {brands.map((brand) => (

                                <div key={brand} className="flex items-center">
                                <input
                                id={'brands-' + brand}
                                name='brands'
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={() => handleBrandCheckboxChange(brand)}
                                checked={selectedBrands.includes(brand)}
                                />
                                <label htmlFor={'brands-' + brand}  className="ml-3 text-sm text-gray-600">
                                {brand}
                                </label>
                                </div>

                            ))}
                            
                        </div>
                      </fieldset>
                    </div>

                    <div  className='pt-10'>
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">Category</legend>
                        <div className="space-y-3 pt-6">
                            {categories.map((category) => (

                                <div key={category.id} className="flex items-center">
                                <input
                                id={'categorys-' + category.id}
                                name='categorys'
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                onChange={() => handleCheckboxChange(category)}
                                checked={selectedCategories.includes(category.id)}
                                />
                                <label htmlFor={'categorys-' + category.id}  className="ml-3 text-sm text-gray-600">
                                {category.name}
                                </label>
                                </div>

                            ))}
                            
                        </div>
                      </fieldset>
                    </div>



                </form>
              </div>
            </aside>

            <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >

                    <Link href={`/products/${product.id}`}>
                    <div className="aspect-w-3 aspect-h-4 bg-white group-hover:opacity-75 sm:aspect-none sm:h-96">
                      <img
                       src={product.images[0].url}
                        alt={product.imageAlt}
                        className="h-full w-full object-contain object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.brand} {product.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="text-lg font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
                      </div>
                    </div>
                    </Link>
                    
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
    </div>
  )
}

export default page