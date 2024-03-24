'use client'
import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css'
import { Autoplay, FreeMode, Pagination, Thumbs } from 'swiper/modules';

interface ProductSlideshowProps {
    images: string[]
    className?: string
}

export default function ProductMobielSlideshow({ images, className }: ProductSlideshowProps) {

    return (
        <div className={className}>
            <Swiper
            style={{ 
                width: '100vw',
                height: '500px',
             }}
                pagination
                modules={[FreeMode, Thumbs, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={`/products/${image}`} alt={`product image ${index}`} width={600} height={500} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
