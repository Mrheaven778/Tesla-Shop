'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Swiper as SwiperObj } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface ProductSlideshowProps {
    images: string[]
    className?: string
}

export default function ProductSlideshow({ images, className }: ProductSlideshowProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObj>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={`/products/${image}`} alt={`product image ${index}`} width={1024} height={800} className='object-fill rounded-xl'/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image src={`/products/${image}`} alt={`product image ${index}`} width={100} height={100} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
