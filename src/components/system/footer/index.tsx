import React from 'react'
import { InstagramIcon } from './icons/InstagramIcon'
import { YouTubeIcon } from './icons/YouTubeIcon'
import { FacebookIcon } from './icons/FacebookIcon'
import { TwitterIcon } from './icons/Twittericon'

const Footer = () => {
  return (
    <footer className='px-6 py-8 bg-black text-white text-center space-y-4'>
        <div className=' space-y-1'>
            <p className=' text-sm'>Connect with us on social media</p>
            <div className=' flex justify-center gap-2'>
                <a href='#'>
                    <InstagramIcon className=' text-white w-7 h-7' />
                </a>
                <a href='#'>
                    <YouTubeIcon className=' text-white w-7 h-7' />
                </a><a href='#'>
                    <FacebookIcon className=' text-white w-7 h-7' />
                </a><a href='#'>
                    <TwitterIcon className=' text-white w-7 h-7' />
                </a>
            </div>
        </div>

        <div className=' space-y-1'>
            <p className=' text-sm'>Shop address</p>
            <p className=' font-light text-sm'>
                Mirador Mansion, 1/f shop 24, 24/54- 64 Nathan Rd, Tsim Sha Tsui
            </p>
        </div>

        <div className=' space-y-1'>
            <p className=' text-sm'>Telephone</p>
            <p className=' font-light text-sm'>
                +852 6354 6573
            </p>
        </div>

        <p className=' text-sm mt-4'>Copyright © 2024 Afro Barber. All rights reserved.</p>
    </footer>
  )
}

export default Footer