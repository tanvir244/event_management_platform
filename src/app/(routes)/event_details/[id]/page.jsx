import Image from 'next/image';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaHashtag, FaLocationDot } from 'react-icons/fa6';
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { getSingleData } from '@/customs/getData';
import Booking from '@/components/shared/Booking';
import Comments from '@/components/Comments/Comments';


const page = async ({ params }) => {
    console.log(params);
    const expectedEvent = await getSingleData(params.id);
    // console.log(expectedEvent);
    const { _id, name, date, time, category, location, price, eventImage, description } = expectedEvent;

    return (
        <div className=''>
            <div className='w-full h-[540px] relative'>
                <Image src={eventImage} alt='image' layout='fill' objectFit='cover' placeholder='blur' blurDataURL={eventImage} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-transparent"></div>
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center'>{name}</h1>
            </div>
            <div className='w-[90%] md:max-w-6xl mx-auto my-10 space-y-6'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-12 gap-8 bg-[#001427] text-white rounded-xl'>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><MdAccessTimeFilled /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>{time}</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><FaCalendarAlt /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>{date}</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><FaLocationDot /> <span className='font-bold'>{location}</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><HiMiniCurrencyDollar /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>{price}</span></h3>
                    <h3 className='text-xl lg:text-2xl flex flex-col gap-2'><FaHashtag /> <span className='font-bold text-lg md:text-lg lg:text-2xl'>{category}</span></h3>
                    {/* clicked booking button  */}
                    <Booking eventId={params.id} />
                </div>
                <div className='bg-[#001427] rounded-xl px-12 py-8 text-white pb-12 mb-6'>
                    <div contentEditable='false' dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
                {/* user comment section  */}
                <Comments postId={_id} />
            </div>
        </div>
    );
};

export default page;