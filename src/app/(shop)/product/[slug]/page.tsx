import NotFound from '@/app/not-found'
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector'
import SizeSelector from '@/components/product/size-selector/SizeSelector'
import ProductMobielSlideshow from '@/components/product/slideshow/ProductMobielSlideshop'
import ProductSlideshow from '@/components/product/slideshow/ProductSlideshow'
import { titleFont } from '@/config/fonts'
import { initialData } from '@/seed/seed'
import React from 'react'
interface ProductPageProps {
  params: {
    slug: string
  }
}
const products = initialData.products

function ProductPage({ params: { slug } }: ProductPageProps) {
  const product = products.find(product => product.slug === slug)

  if (!product) {
    return (
      <NotFound />
    )
  }


  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 '>

      <div className='col-span-1 md:col-span-2 '>

        <ProductMobielSlideshow images={product.images} className='block md:hidden'/>

         {/* Desktop  slideshow */}
          <ProductSlideshow images={product.images} className='hidden md:block'/>
      </div>

      <div className='col-span-1 px-5 '>
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
        <p className='text-lg mb-5'>$ {product.price}</p>
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        <QuantitySelector quantity={3}/>

        <button className='btn-primary my-5'>Agregar al Carrito</button>
        <h3 className='font-bold text-sm'>Descipcion</h3>

        <p className='font-light'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage