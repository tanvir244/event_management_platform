import Image from 'next/image';
import React from 'react';

const TraditionalPage = () => {
    return (
        <div className='w-[90%] md:max-w-6xl mx-auto my-20'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-14'>Traditional Festivels</h2>
            <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* image  */}
                <div className='relative bg-gray-200 h-[250px] rounded-xl overflow-hidden'>
                    <Image
                        src={'https://i.ibb.co/n10Y6B4/security-4.jpg'}
                        alt='traditional_festivels'
                        layout='fill'
                        objectFit='cover'
                        className='rounded-xl'
                    />
                    {/* linear bg */}
                    <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/60'></div>
                </div>

                {/* content inside image */}
                <div className="absolute top-12 left-8">
                    <h1 className='text-2xl font-bold text-yellow-300 mb-2'>Have you got what I TOLD</h1>
                    <p className='text-white mt-2 w-[320px] leading-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt perferendis quibusdam magnam id adipisci fugiat, tempore consequuntur debitis laboriosam.
                    </p>
                </div>
            </div>
        </div>
    );
};



export default TraditionalPage;