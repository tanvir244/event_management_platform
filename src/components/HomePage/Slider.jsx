"use client"
import { getSliderData } from '@/customs/getData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    const [sliderData, setSliderData] = useState([]);
    const [expected, setExpected] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const { image, title, short_descrip } = expected;

    // fetching data
    useEffect(() => {
        const fetchData = async () => {
            const resp = await getSliderData();
            setSliderData(resp);
            setExpected(resp[currentIndex]);
        }
        fetchData();
    }, [currentIndex]);

    // prev
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    // next
    const nextSlide = () => {
        if (currentIndex < sliderData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <div className='relative h-[85vh] p-8 md:p-4 lg:py-24 lg:px-12'>
            {/* Image */}
            <Image
                src={image}
                alt='photo'
                layout='fill'
                objectFit='cover'
                className='absolute top-0 left-0 z-[-1]'
            />

            {/* Dark linear gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90 rounded-xl z-[-1]"></div>

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
                <div className='w-full lg:w-[480px] mx-auto pl-10'>
                    <h1 className='text-2xl md:text-4xl font-bold text-yellow-300 mb-4'>{title || 'See Popular Concerts Next'}</h1>
                    <p className='text-gray-200'>{short_descrip || 'Don\'t miss the upcoming events and concerts happening soon.'}</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className='absolute bottom-4 md:bottom-16 right-4 md:right-24 flex gap-6 z-20'>
                <button onClick={prevSlide} className='btn bg-white hover:bg-gray-600 hover:text-white text-black p-4 rounded-full'>
                    <FaArrowLeft />
                </button>
                <button onClick={nextSlide} className='btn bg-white hover:bg-gray-600 hover:text-white text-black p-4 rounded-full'>
                    <FaArrowRight />
                </button>
            </div>
        </div>

    );
};

export default Slider;
