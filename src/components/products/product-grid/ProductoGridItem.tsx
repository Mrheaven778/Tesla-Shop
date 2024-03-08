"use client"

import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
interface ProductoGridItemProps {
  product: Product
}

function ProductoGridItem({ product }: ProductoGridItemProps) {
  const [displayImage, setDisplayImage] = useState(product.images[0])
  const handleMouseEnter = () => {
    setDisplayImage(product.images[1])
  }

  const handleMouseLeave = () => {
    setDisplayImage(product.images[0])
  }
  
  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <Link href={`/product/${product.slug}`}>
        <Image src={`/products/${displayImage}`} alt={product.title} className='w-full object-cover rounded-sm' width={500} height={500} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}/>
      </Link>
      <div className='p-4 flex flex-col'>
        <Link className='hover:text-blue-600' href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className='font-bold'>{product.price} $</span>
      </div>
    </div>
  )
}

export default ProductoGridItem