'use client'

import { useState } from 'react'
import Image from 'next/image'

type Product = {
  id: string
  name: string
  image: string
  price: number
  available: boolean
  slot: string
  description: string
  dosage: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Paracetamol Extra',
    image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/321/321193/antibiotic-medication-concept-photo.jpg?w=1155&h=1734', // Direct image link
    price: 5.99,
    available: true,
    slot: 'A1',
    description: 'Fast-acting pain relief medication',
    dosage: '500mg'
  },
  {
    id: '2',
    name: 'Allergy Relief Plus',
    image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/321/321193/antibiotic-medication-concept-photo.jpg?w=1155&h=1734', // Another direct image link
    price: 8.99,
    available: true,
    slot: 'A2',
    description: 'Non-drowsy antihistamine',
    dosage: '10mg'
  },

  {
    id: '3',
    name: 'Cold & Flu Relief',
    image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/321/321193/antibiotic-medication-concept-photo.jpg?w=1155&h=1734',
    price: 12.99,
    available: false,
    slot: 'A3',
    description: 'Multi-symptom cold and flu relief',
    dosage: '200mg/30mg'
  },
  {
    id: '4',
    name: 'Ibuprofen Rapid',
    image: '/placeholder.svg?text=IR&height=150&width=100',
    price: 6.99,
    available: true,
    slot: 'B1',
    description: 'Anti-inflammatory pain relief',
    dosage: '200mg'
  },
  {
    id: '5',
    name: 'Digestive Aid',
    image: '/placeholder.svg?text=DA&height=150&width=100',
    price: 9.99,
    available: true,
    slot: 'B2',
    description: 'Fast-acting antacid tablets',
    dosage: '10ml'
  },
  {
    id: '6',
    name: 'Throat Lozenges',
    image: '/placeholder.svg?text=TL&height=150&width=100',
    price: 4.99,
    available: true,
    slot: 'B3',
    description: 'Soothing honey & lemon lozenges',
    dosage: '2.5mg'
  },
  {
    id: '7',
    name: 'Vitamin C Complex',
    image: '/placeholder.svg?text=VC&height=150&width=100',
    price: 7.99,
    available: true,
    slot: 'C1',
    description: 'Immune system support',
    dosage: '1000mg'
  },
  {
    id: '8',
    name: 'Bandage Pack',
    image: '/placeholder.svg?text=BP&height=150&width=100',
    price: 3.99,
    available: true,
    slot: 'C2',
    description: 'Sterile adhesive bandages',
    dosage: '10 pcs'
  },
  {
    id: '9',
    name: 'Sleep Aid',
    image: '/placeholder.svg?text=SA&height=150&width=100',
    price: 14.99,
    available: true,
    slot: 'C3',
    description: 'Natural sleep support supplement',
    dosage: '50mg'
  },
  {
    id: '10',
    name: 'Muscle Rub',
    image: '/placeholder.svg?text=MR&height=150&width=100',
    price: 11.99,
    available: true,
    slot: 'D1',
    description: 'Topical pain relief gel',
    dosage: '30g'
  },
  {
    id: '11',
    name: 'First Aid Kit',
    image: '/placeholder.svg?text=FAK&height=150&width=100',
    price: 19.99,
    available: true,
    slot: 'D2',
    description: 'Essential first aid supplies',
    dosage: 'Basic'
  },
  {
    id: '12',
    name: 'Eye Drops',
    image: '/placeholder.svg?text=ED&height=150&width=100',
    price: 8.99,
    available: true,
    slot: 'D3',
    description: 'Lubricating eye drops',
    dosage: '10ml'
  }
]

export default function VendingMachine() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="bg-white rounded-lg shadow-inner flex-1 p-4 md:p-6">
      <div className="relative bg-gray-100 rounded-lg p-2 md:p-4 h-[400px] md:h-[600px]">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg pointer-events-none" />
        
        {/* Scrollable products container */}
        <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#45B5A1] scrollbar-track-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 content-start">
            {products.map((product) => (
              <button
                key={product.id}
                className={`relative group flex flex-col items-center justify-center p-2 rounded-lg bg-white/80 backdrop-blur-sm
                  ${
                    product.available
                      ? 'hover:bg-[#E8F4F2] cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'
                  }
                `}
                onClick={() => product.available && setSelectedProduct(product)}
                disabled={!product.available}
              >
                <div className="relative w-full aspect-[2/3] mb-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <span className="absolute top-1 right-1 md:top-2 md:right-2 bg-white/90 px-1 py-0.5 md:px-2 md:py-1 rounded text-xs md:text-sm font-mono">
                  {product.slot}
                </span>
                <div className="text-center w-full">
                  <p className="text-xs md:text-sm font-medium line-clamp-2">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.dosage}</p>
                  <p className="text-xs md:text-sm text-[#45B5A1] font-bold">${product.price.toFixed(2)}</p>
                </div>
                {!product.available && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-lg">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs md:text-sm">
                      Out of Stock
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product details overlay */}
        {selectedProduct && (
          <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-4 md:p-6 max-w-xs md:max-w-md w-full">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-32 h-48">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{selectedProduct.name}</h3>
                  <p className="text-sm text-gray-500">{selectedProduct.dosage}</p>
                  <p className="text-[#45B5A1] text-xl font-bold mt-2">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedProduct.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="px-4 py-2 bg-[#45B5A1] text-white rounded-lg hover:bg-[#2C7A6B]"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Purchase
                    </button>
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

