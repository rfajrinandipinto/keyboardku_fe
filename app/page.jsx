"use client"

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'

import Hero from './_components/Hero'

export default function Home() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [keyboards, setKeyboards] = useState([]);
  const [keycaps, setKeycaps] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [parts, setParts] = useState([]);

  useEffect(() => {
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

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products?limit=4');
        const data = await response.json();

        console.log(data)

        setProducts(data['products']);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();


    const fetchKeyboards = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products?limit=4&category=1');
        const data = await response.json();

        console.log(data)

        setKeyboards(data['products']);
      } catch (error) {
        console.error('Error fetching keyboards:', error);
      }
    };

    fetchKeyboards();

    const fetchKeycaps = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products?limit=4&category=2');
        const data = await response.json();

        console.log(data)

        setKeycaps(data['products']);
      } catch (error) {
        console.error('Error fetching keyboards:', error);
      }
    };

    fetchKeycaps();

    const fetcAccessories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products?limit=4&category=3');
        const data = await response.json();

        console.log(data)

        setAccessories(data['products']);
      } catch (error) {
        console.error('Error fetching keyboards:', error);
      }
    };

    fetcAccessories();

    const fetcParts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products?limit=4&category=5');
        const data = await response.json();

        console.log(data)

        setParts(data['products']);
      } catch (error) {
        console.error('Error fetching keyboards:', error);
      }
    };

    fetcParts();
  }, []);


  return (
    <div className="bg-white">
      {/* Mobile menu */}
     

      <Hero></Hero>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Products</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See More
            <span aria-hidden="true"> &rarr;</span>
          </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {products.slice(0,4).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.images[0].url}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand} {product.name}
                    </a>
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>




          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Discover the Art of Typing
</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                Welcome to KEYBOARD.KU , where keyboards transcend ordinary typing and become a canvas for creativity. Elevate your typing experience with our curated collection of mechanical keyboards, each designed for enthusiasts, gamers, and professionals.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                 Discover More
                </a>
              </div>
            </div>
          </div>
        </section>



            {/* Keyboards Section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Keyboards</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See More
            <span aria-hidden="true"> &rarr;</span>
          </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {keyboards.slice(0,4).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.images[0].url}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand} {product.name}
                    </a>
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>


          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

            {/* Keycaps Section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Keycaps</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See More
            <span aria-hidden="true"> &rarr;</span>
          </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {keycaps.slice(0,4).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.images[0].url}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand} {product.name}
                    </a>
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>




          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

            {/* Accessories Section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Accessories</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See More
            <span aria-hidden="true"> &rarr;</span>
          </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {accessories.slice(0,4).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.images[0].url}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand} {product.name}
                    </a>
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>




          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>


            {/* Parts & DIY Section */}
        <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Parts & DIY</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            See More
            <span aria-hidden="true"> &rarr;</span>
          </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {parts.slice(0,4).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.images[0].url}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand} {product.name}
                    </a>
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">Rp {product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>




          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>


      </main>

    </div>
  )
}
