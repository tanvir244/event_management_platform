"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalLength = sliderData.length;

    const prevSlide = () => {
        if (currentIndex.length > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const nextSlide = () => {
        if(currentIndex.length < totalLength){
            currentIndex(currentIndex + 1);
        }
    }
    console.log(currentIndex);

    return (
        <div className='h-[100vh] my-8 md:p-4 lg:p-12 z-[-1]'>
            {/* Image */}
            <Image
                src={'https://i.ibb.co/Sm9xRq1/blood-donation-56.jpg'}
                alt='photo'
                layout='fill'
                objectFit='cover'
                className='z-[-1]'
            />

            {/* Dark linear gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-white flex flex-col gap-4 md:gap-16 lg:gap-28 md:flex-row justify-between items-center">
                <div className='bg-[#001427] w-[280px] md:w-[320px] lg:w-[410px] flex flex-col px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 gap-4 rounded-lg'>
                    <Link href="/events/Conferences">
                        <button className='btn bg-white w-full py-2 text-[#001427] rounded-lg font-bold'>Conferences</button>
                    </Link>
                    <Link href="/events/Workshops">
                        <button className='btn bg-white w-full py-2 text-[#001427] rounded-lg font-bold'>Workshops</button>
                    </Link>
                    <Link href="/events/Concerts">
                        <button className='btn bg-white w-full py-2 text-[#001427] rounded-lg font-bold'>Concerts</button>
                    </Link>
                </div>
                <div className='w-[320px] lg:w-[480px] mx-auto pb-12'>
                    <h1 className='text-2xl md:text-4xl font-bold text-yellow-300 mb-4'>See Popular Concerts Next</h1>
                    <p className='text-gray-200 '>To ensure the background image spans the full width of its container, you can use the Image component from Next.js with the fill prop and set objectFit: cover.</p>
                </div>
            </div>
            <div className='absolute bottom-4 md:bottom-16 right-4 md:right-24 flex gap-6'>
                <button onClick={prevSlide} className='btn bg-white hover:bg-gray-600 hover:text-white text-black p-4 rounded-full'><FaArrowLeft /></button>
                <button onClick={nextSlide} className='btn bg-white hover:bg-gray-600 hover:text-white text-black p-4 rounded-full'><FaArrowRight /></button>
            </div>
        </div>
    );
};

const sliderData = [
    {
        "image": "Sm9xRq1/blood-donation-56", // Adjust based on actual image URLs
        "title": "Popular Blood Donation Drive",
        "short_descrip": "Join us to donate blood and save lives!"
    },
    {
        "image": "some-other-image",
        "title": "Community Workshop",
        "short_descrip": "Participate in our community workshops."
    },
    {
        "image": "another-image",
        "title": "Upcoming Concert",
        "short_descrip": "Don't miss our exciting concert events."
    },
];


export default Slider;