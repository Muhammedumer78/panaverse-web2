import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import png2 from "../../../public/logo23.webp";
export default function Footer() {
    return (
        <>
            <div className=' md:flex align-middle gap-[30px] p-[60px] bg-black'>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold mb-[30px] border-l-blue-600 border-l-[6px] pl-[10px]'>About Us</h1>
                    <Image src={png2} alt='' width={120} height={120} />
                    <p className=' text-gray-600 mt-[20px]'>The Future of the Web is 3.0,Metaverse,and Edge Computing.Panaverse DAO is a movement to spread these technologies globally.It is a community of Web3 and Metaverse developers,designers,trainers,startup founders and service providers.</p>
                </div>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-[10px]'>Useful Links</h1>
                    <ul className=' text-gray-600 pt-[30px]'>
                        <li><Link href={'/Home'} className='  hover:text-white'>Home</Link></li>
                        <li><Link href={'/explore'} className='  hover:text-white'>Explore</Link></li>
                        <li><Link href={'/about'} className='  hover:text-white'>About</Link></li>
                        <li><Link href={'/contact'} className='  hover:text-white'>Contact</Link></li>
                    
                    </ul>
                </div>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-[10px]'>Follow Us</h1>
                    <ul className=' text-gray-600 pt-[30px]'>
                        <li><Link href={'/https://www.facebook.com/panaverse.dao/'} className='  hover:text-white'>Facebook</Link></li>
                        <li><Link href={'/https://www.linkedin.com/company/panaverse/?originalSubdomain=pk'} className='  hover:text-white'>Linkedin</Link></li>
                        <li><Link href={'/https://twitter.com/panaverse_edu?lang=en'} className='  hover:text-white'>Twitter</Link></li>
                        <li><Link href={'/https://www.youtube.com/@panaverse'} className='  hover:text-white'>Youtube</Link></li>
                        <li><Link href={'/https://github.com/panaverse'} className='  hover:text-white'>GitHub</Link></li>
                    </ul>
                </div>
                <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
                    <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-[10px]'>Contact Us</h1>
                    <ul className=' text-gray-600 pt-[30px]'>
                        <li><Link href={'/'} className='  hover:text-white'>+92 123 4567890</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>abcdefghi@gmail.com</Link></li>
                        <li><Link href={'/'} className='  hover:text-white'>Karachi, Pakistan</Link></li>
                    </ul>
                </div>
            </div>
            <div className='md:flex justify-between px-[60px] py-[10px] text-center'>
                <p className=' font-bold'>All Rights Reserved © | <br className='md:hidden' /><Link href='https://github.com/Muhammedumer78' target='_blank' >M umer </Link></p>
                <div>
                    <Link href={'/'}>Legals </Link>|
                    <Link href={'/'}> Terms Of Use </Link>|
                    <Link href={'/'}> Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}