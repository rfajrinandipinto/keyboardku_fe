'use client'

import React from 'react'
import { useState , useEffect} from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

// const product = {
//   name: 'Zip Tote Basket',
//   price: '$140',
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: 'Angled view',
//       src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     // More images...
//   ],
//   colors: [
//     { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
//     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
//     { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: 'Features',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//     // More sections...
//   ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductDetailPage = (props) => {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [product, setProduct] = useState([]);

  var id = props.params['id'];

  console.log(id);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
          const data = await response.json();

          console.log(data)
  
          setProduct(data['product']);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();

     

},[])

       
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {product.images.map((image) => (
                <Tab
                  key={image.id}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only"> {image.name} </span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img src={image.url} alt="" className="h-full w-full object-cover object-center" />
                      </span>
                      <span
                        className={classNames(
                          selected ? 'ring-indigo-500' : 'ring-transparent',
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
            {product.images.map((image) => (
              <Tab.Panel key={image.id}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">Rp {product.price.toLocaleString()}</p>
          </div>

         

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              className="space-y-6 text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          <form className="mt-6">
           

            <div className="sm:flex-col1 mt-10 flex">
              <button
                type="submit"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Buy Now
              </button>

             
            </div>
          </form>

          <section aria-labelledby="details-heading" className="mt-12">
            <h2 id="details-heading" className="sr-only">
              Additional details
            </h2>

            <div className="divide-y divide-gray-200 border-t">
              
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetailPage