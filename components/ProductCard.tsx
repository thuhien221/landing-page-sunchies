'use client'

import { useState } from 'react'

interface Product {
    id: number
    name: string
    image: string
    price: string
}

interface ProductCardProps {
    product: Product
    onImageClick: () => void
}

export default function ProductCard({ product, onImageClick }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform"
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                    onClick={onImageClick}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.price}</h3>
            </div>
        </div>
    )
}