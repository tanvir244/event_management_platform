import Image from 'next/image';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaBookmark, FaLocationDot } from 'react-icons/fa6';
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";


const EventDetails = ({ params }) => {
    console.log(params);

    return (
        <div className=''>
            <div className='w-full h-[540px] relative'>
                <Image src="https://i.ibb.co/WDLMwdB/blood-donation-73.jpg" alt='image' layout='fill' objectFit='cover' placeholder='blur' blurDataURL={'https://google.com'} />
            </div>
            <div className='w-[90%] md:max-w-6xl mx-auto my-10 space-y-6'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-12 gap-14 bg-[#001427] text-white rounded-xl'>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><MdAccessTimeFilled /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>04:30 PM</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><FaCalendarAlt /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>28-04-2024</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><FaLocationDot /> <span className='font-bold'>Bangladesh</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><HiMiniCurrencyDollar /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>210</span></h3>
                    <button className='btn bg-green-600 text-white flex items-center gap-4 py-4 px-8 text-xl rounded-2xl hover:bg-white hover:text-black'><span className='text-2xl'><FaBookmark /></span> Book</button>
                </div>
                <div className='bg-[#001427] rounded-xl px-12 py-8 text-white pb-12 mb-6'>
                    <h1 className='text-5xl font-bold text-white '>This is the heading</h1>
                    <p className='text-base pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto fuga, optio, doloribus repellendus tenetur explicabo sequi sit eum ratione eius voluptas perferendis deleniti quaerat illo quibusdam amet sapiente quam vero.</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Comments</h1>
                    <div className='border-b border-black mb-2'>
                        <input type="text" className='w-full text-lg font-semibold py-2 px-4' />
                    </div>
                    <div className='flex justify-end'>
                    <button className='btn bg-[#001427] py-2 px-4 rounded-xl text-white'>send</button>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                        <div>
                            <Image
                                src="https://i.ibb.co/Srzp6qk/01-unsplash.png"
                                alt='user'
                                width={90}
                                height={90}
                                objectFit='cover'
                                className='rounded-full'
                            />
                        </div>
                        <div>
                            <h1 className='text-xl mb-2 font-bold'>Tanvir Rahman</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, modi provident voluptas porro temporibus eaque repellat dolore. Recusandae in modi error optio ex, dolorem incidunt laborum, facilis eius soluta odit?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;