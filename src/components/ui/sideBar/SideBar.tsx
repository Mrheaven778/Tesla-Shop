'use client'
import { SideMenuItems } from '@/config/sideMenu'
import { useUIStore } from '@/store/ui/ui-store';
import clsx from 'clsx';
import Link from 'next/link'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'

const getIcon = (iconName: string, size: string | number | undefined) => {
    switch (iconName) {
        case 'IoPersonOutline':
            return <IoPersonOutline size={size} />;
        case 'IoTicketOutline':
            return <IoTicketOutline size={size} />;
        case 'IoLogInOutline':
            return <IoLogInOutline size={size} />;
        case 'IoLogOutOutline':
            return <IoLogOutOutline size={size} />;
        default:
            return null;
    }
};

function SideBar() {

    const isSideBarOpen = useUIStore(state => state.isSidebarOpen)
    const closeSidebar = useUIStore(state => state.closeSidebar)

    return (
        <div>
            {/* black background */}
            {isSideBarOpen && <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />}

            {/* blur */}
            {isSideBarOpen && <div className='fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' onClick={closeSidebar} />}


            {/* sideMenu */}

            <nav className={
                clsx('fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300', isSideBarOpen ? 'translate-x-0' : 'translate-x-full')
            }>
                <IoCloseOutline size={50} className='absolute top-5 right-5 cursor-pointer' onClick={() => (closeSidebar())} />
                {/* buqueda */}
                <div className='relative mt-14 '>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input type="text" name="" id="" placeholder='Buscar' className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500' />
                </div>

                {/* categorias */}
                {
                    SideMenuItems.map((item, index) => (
                        <Link href={item.dirrecion} key={index} className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                            {getIcon(item.icono, 30)}
                            <span className='ml-3 text-xl'>{item.nombre}</span>
                        </Link>
                    ))
                }
                <div className='w-full h-px bg-gray-300 my-10' />

                <Link
                    href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline size={30} />
                    <span className="ml-3 text-xl">Productos</span>
                </Link>

                <Link
                    href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl">Ordenes</span>
                </Link>

                <Link
                    href="/"
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPeopleOutline size={30} />
                    <span className="ml-3 text-xl">Usuarios</span>
                </Link>
            </nav>

        </div>
    )
}


export default SideBar