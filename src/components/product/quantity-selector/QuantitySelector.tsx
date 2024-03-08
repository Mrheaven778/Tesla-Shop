'use client'
import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'


interface QuantitySelectorProps {
    quantity: number
    setQuantity?: (quantity: number) => void

}

function QuantitySelector({ quantity, setQuantity }: QuantitySelectorProps) {
    const [counet, setCounet] = useState(quantity)
    const onCounetChange = (newCounet: number) => {
        if (counet + newCounet < 1) return
        setCounet(counet + newCounet)
    }
    return (
        <div className='flex'>
            <button>
                <IoRemoveCircleOutline size={30} onClick={() => onCounetChange(-1)} />

            </button>
            <span className='w-20 mx-3 px-5 bg-gray-100 text-center rounded'>
                {counet}
            </span>
            <button onClick={() => onCounetChange(1)}>
                <IoAddCircleOutline size={30} />
            </button>
        </div>
    )
}

export default QuantitySelector