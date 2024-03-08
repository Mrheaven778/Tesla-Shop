import { Product } from '@/interfaces'
import React from 'react'
import ProductoGridItem from './ProductoGridItem'

interface ProductGridProps {
    products: Product[]
    
}
function ProductGrid({products}: ProductGridProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10'>
        {products.map(product=>(
                <ProductoGridItem product={product} key={product.slug}/>
        ))}
    </div>
  )
}

export default ProductGrid