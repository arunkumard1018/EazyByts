import { ProductTable } from '@/components/dashboard/products/ProductTable'
import React from 'react'

function page() {
  return (
    // <div className='text-4xl text-center text-green-400'>Product Page</div>
    <ProductTable className="w-screen md:w-[82.9vw]" />
  )
}

export default page