'use client'

import { useEffect } from 'react'

interface ImageModalProps {
    image: string
    onClose: () => void
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [onClose])

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose} // Đóng modal khi nhấn vào vùng đen
        >
            <div
                className="max-w-4xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Ngăn việc nhấn vào modal kích hoạt onClose
            >
                <img src={image} alt="Full-screen view" className="max-w-full max-h-full object-contain" />
            </div>
            <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={onClose}
                aria-label="Close full-screen image"
            >
                &times;
            </button>
        </div>
    )
}
