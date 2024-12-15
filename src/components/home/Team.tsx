import { team } from '@/lib/data';
import React from 'react'

type MemberCardProps = {
    name: string;
    image: string;
    description: string;
    reverse?: boolean;
}
const MemberCard = (props: MemberCardProps)=>{
    return (
        <div 
            className=' flex gap-4 justify-center items-center'
            style={{ flexDirection: props.reverse ? 'row-reverse' : 'row' }}
        >
            <img 
                src={props.image} 
                className=' w-1/2 rounded-[48px] aspect-[3/4] object-cover grayscale'
                alt="" 
            />
            <div className=' w-1/2 space-y-3 text-white'>
                <p className=' font-bold'>{props.name}</p>
                <p className=' font-extralight text-sm'>
                    {props.description}
                </p>
            </div>
        </div>
    )
}
const Team = () => {
  return (
    <div className=' px-6 py-8 bg-black space-y-8'>
        <h2 className=' text-white text-lg font-bold'>Our Team</h2>
        <div className=' space-y-12'>
            {
                team.map((member, index) => index % 2 == 0 ? (
                    <MemberCard key={index} {...member} />
                ): (
                    <MemberCard key={index} {...member} reverse={true} />
                )
                )
            }
        </div>
    </div>
  )
}

export default Team