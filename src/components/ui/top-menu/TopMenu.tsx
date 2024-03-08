'use client'
import { TopMenuItems } from '@/config/TopMenu';
import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store/ui/ui-store';
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';



function TopMenu() {
  const openSidebar = useUIStore(state => state.openSidebar)
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold`}>TESLO</span>
          <span> | SHOP</span>
        </Link>
      </div>

      {/* {Center menu} */}
      <div className='hidden sm:block'>
        {TopMenuItems.map((item, index) => (
          <Link href={`/category/${item.dirrecion.toLowerCase()}`} key={index} className='m-2 p-2 rounded-md transition-all hover:bg-gray-300 '>
            <span className='mx-2'>{item.nombre}</span>
          </Link>
        ))}
      </div>

      {/* {Right menu} */}
      <div className='flex items-center gap-5'>
        <Link href='/search'>
          <IoSearchOutline className='w-5 h-5' />
        </Link>
        <Link href='/cart'>
          <div className='relative'>
            <span className='absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 -right-2 text-white'>3</span>
            <IoCartOutline className='w-5 h-5' />
          </div>
        </Link>

        <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-300' onClick={openSidebar}>
          Menu
        </button>
      </div>

    </nav>
  )
}

export default TopMenu