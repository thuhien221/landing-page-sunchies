'use client'
import ImageModal from '@/components/ImageModal'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import React, { useState } from 'react'

const products = [
  { id: 1, name: 'Cột tóc', image: '/product_1.jpg?height=300&width=300', price: '22.000 VND' },
  { id: 2, name: 'Cột tóc', image: '/product_2.jpg?height=300&width=300', price: '15.000 VND' },
  { id: 3, name: 'Cột tóc', image: '/product_3.jpg?height=300&width=300', price: '18.000 VND' },
  { id: 4, name: 'Cột tóc', image: '/product_4.jpg?height=300&width=300', price: '15.000 VND' },
  { id: 5, name: 'Cột tóc', image: '/product_5.jpg?height=300&width=300', price: '22.000 VND' },
  { id: 6, name: 'Cột tóc', image: '/product_6.jpg?height=300&width=300', price: '11.000 VND' },
  { id: 7, name: 'Cột tóc', image: '/product_7.jpg?height=300&width=300', price: '19.000 VND' },
  { id: 8, name: 'Cột tóc', image: '/product_8.jpg?height=300&width=300', price: '10.000 VND' },
  { id: 9, name: 'Cột tóc', image: '/product_9.jpg?height=300&width=300', price: '13.000 VND' },
  { id: 10, name: 'Cột tóc', image: '/product_10.jpg?height=300&width=300', price: '13.000 VND' },
  { id: 11, name: 'Cột tóc', image: '/product_11.jpg?height=300&width=300', price: '10.000 VND' },
]

const Content = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  return (
    <section className="flexCenter flex-col">

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/banner.jpg"
          alt="Image"
          width={1080}
          height={280}
          className="w-full lg:aspect-[16/3] object-cover 2xl:rounded-5xl aspect-[16-4]"
        />
      </div>
      <div className="container mx-40 py-12">
        <h2 className="text-5xl bold-40  font-bold text-center mb-16">Sản phẩm của chúng tôi</h2>
        <div className="grid mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:mx-40">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={() => setSelectedImage(product.image)}
            />
          ))}
        </div>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </div>
    </section>
  )
}

export default Content
