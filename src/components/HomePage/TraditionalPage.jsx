"use client"
import { getTraditionalFestival } from '@/customs/getData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TraditionalPage = () => {
    const [festivals, setFestivals] = useState([]);
    const {image, title, description} = festivals;

    useEffect(() => {
        const fetchData = async () => {
            const res = await getTraditionalFestival();
            setFestivals(res);
        }
        fetchData()
    }, [])

    return (
        <div className='w-[90%] md:max-w-6xl mx-auto my-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Traditional Festivels</h2>
            <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {festivals.map(item => (
                <div key={item._id} className='relative bg-gray-200 h-[250px] rounded-xl overflow-hidden'>
                    {/* Image */}
                    <Image
                        src={item.image}
                        alt={item.title}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-xl'
                    />
                    {/* Linear gradient */}
                    <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60'></div>

                    {/* Content inside image */}
                    <div className="absolute top-12 left-8">
                        <h1 className='text-2xl font-bold text-yellow-300 mb-2'>{item.title}</h1>
                        <p className='text-white mt-2 w-full pr-4 leading-5'>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};



export default TraditionalPage;