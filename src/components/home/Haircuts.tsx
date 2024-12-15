import { haircuts } from '@/lib/data';
import React from 'react'

type HaircutCardProps = {
  name: string;
  price: number;
  image: string;
}
const HaircutCard = (props: HaircutCardProps) => {
  return (
    <div className='rounded-lg overflow-clip border border-black/25 flex flex-col justify-between'>
      <img src={props.image} alt="" className=' aspect-[3/4] object-cover grayscale' />
      <div className=' flex justify-between gap-2 p-3'>
        <p className=' text-base capitalize'>{props.name}</p>
        <p>
            <span className=' text-xs font-light'>HK</span>
            <span className=' font-extrabold text-base'>{props.price}</span>
        </p>
      </div>
      <button className=' font-semibold bg-black text-white w-full text-center py-2'>
        Reserve
      </button>
    </div>
  )
}

const Haircuts = () => {
  return (
    <div className='py-8 px-6 space-y-4'>
        <h2 className=' text-lg font-bold'>Haircuts</h2>
        <div className=' grid grid-cols-2 gap-4'>
          {
            haircuts.map((haircut, index) => (
              <HaircutCard key={index} {...haircut} />
            ))
          }
        </div>
    </div>
  )
}

export default Haircuts;