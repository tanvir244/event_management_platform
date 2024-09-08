"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAnglesDown } from "react-icons/fa6";

const Navbar = () => {
    const [category, setCategory] = useState(false);
    const [profilee, setProfilee] = useState(false);
    
    const { data: session } = useSession();
    const name = session?.user?.name;
    const email = session?.user?.email;
    const profile = session?.user?.profile;
    const image = session?.user?.image;
    console.log(session);
    console.log(name, email, profile);

    const offCategory = () => {
        setCategory(false)
    }
    const offProfile = () => {
        setProfilee(false)
    }

    return (
        <div className='relative bg-[#001427] p-6'>
            <div className='flex flex-col lg:flex-row gap-[24px] lg:gap-0 justify-between items-center max-w-6xl mx-auto'>
                <div className='w-full lg:w-[30%] text-center'>
                    <h1 className='text-4xl font-bold text-white'>Event Wave</h1>
                </div>
                <div className='w-full lg:w-[70%] flex flex-col text-white gap-[16px] md:gap-0 md:flex-row justify-between items-center'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <ul className='flex gap-8 text-sm font-semibold cursor-pointer'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/event_listing'}>Event Listing</Link></li>
                            <li onClick={() => setCategory(!category)} className='flex gap-1 items-center'>
                                <span>Category</span>
                                <span className='text-[#737373] text-xs'>
                                    <FaAnglesDown />
                                </span>
                            </li>
                            <li><Link href={'/my_booked_events'}>My Booked List</Link></li>
                        </ul>
                        <ul className={`absolute left-[70px] md:left-[130px] lg:left-[580px] bottom-[-150px] w-[210px] bg-[#001427] rounded-md px-4 py-4 text-white text-sm ${category ? 'block' : 'hidden'}`}>
                            <li onClick={offCategory} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'><Link href={'/events/Conferences'}>Conferences</Link></li>
                            <li onClick={offCategory} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'><Link href={'/events/Workshops'}>Workshops</Link></li>
                            <li onClick={offCategory} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'><Link href={'/events/Concerts'}>Concerts</Link></li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <div className=''>
                            <div className='flex items-center gap-4'>
                                {/* <div>
                                    <input type="text" className='w-[230px] py-2 px-3 rounded-lg border-2 border-gray-300' placeholder='Search events' />
                                </div> */}
                                <div
                                    onClick={() => setProfilee(!profilee)}
                                    className="w-[50px] h-[50px] overflow-hidden rounded-full cursor-pointer"
                                >
                                    <Image
                                        src={session ? profile || image : 'https://i.ibb.co/TmsrwQs/user.png'}
                                        alt='okay'
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <ul style={{ zIndex: 1 }} className={`absolute right-[38px] md:right-[40px] lg:right-[160px] bottom-[-116px] w-[210px] bg-[#001427] rounded-md px-4 py-4 text-white text-sm ${profilee ? 'block' : 'hidden'}`}>
                                {
                                    session ? (
                                        <>
                                            <Link href={'/dashboard'}>
                                                <li onClick={offProfile} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Dashboard</li>
                                            </Link>
                                            <Link onClick={() => signOut()} href={''}>
                                                <li onClick={offProfile} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Logout</li>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link href={'/login'}>
                                                <li onClick={offProfile} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Login</li>
                                            </Link>
                                            <Link href={'/register'}>
                                                <li onClick={offProfile} className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Register</li>
                                            </Link>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;