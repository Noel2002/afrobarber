import { products } from '@/lib/data';
import React from 'react'

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
}
const ProductCard = (props: ProductCardProps) => {
  return (
    <div className='rounded-lg overflow-clip border border-black/25 flex flex-col justify-between'>
      <div>
        <img src={props.image} alt="" className=' aspect-[4/3] object-cover grayscale' />
        <div className=' flex flex-col justify-between p-3'>
          <p>
              <span className=' text-xs font-light'>HK</span>
              <span className=' font-extrabold text-base'>{props.price}</span>
          </p>
          <p className=' text-base capitalize'>{props.name}</p>
        </div>
      </div>
      <button className=' font-semibold bg-black text-white w-full text-center py-2'>
        Purchase
      </button>
    </div>
  )
}

const Products = () => {
  return (
    <div className='py-8 px-6 space-y-4'>
        <h2 className=' text-lg font-bold'>Products</h2>
        <div className=' grid grid-cols-2 gap-4'>
          {
            products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          }
        </div>
    </div>
  )
}

export default Products;