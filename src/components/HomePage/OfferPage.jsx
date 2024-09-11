import Image from 'next/image';
import React from 'react';

const OfferPage = () => {
    return (
        <div className='w-[90%] md:max-w-6xl mx-auto bg-[#001427] text-white py-12 md:py-20 px-8 md:px-12 flex flex-col md:flex-row justify-between rounded-xl my-16 gap-8 z-[-1]'>
            <div className='relative w-full md:w-[480px] h-[320px]'>
                <Image
                    src={'https://i.ibb.co/2SP4q4p/pexels-fotios-photos-709486.jpg'}
                    alt='offer'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='rounded-xl z-[1]'
                    />
            </div>
            <div className='w-full md:w-[520px]'>
                <h2 className='text-3xl md:text-4xl font-bold text-yellow-300 mb-2 md:mb-6'>Special Digital Ticket Offers</h2>
                <p className='text-white'>Experience hassle-free event entry with our digital tickets. Enjoy the convenience of accessing your tickets from any device, skip the physical lines, and dive straight into the excitement. With exclusive offers, now is the best time to go digital for your next concert, workshop, or conference. These limited-time deals make attending your favorite events easier and more affordable than ever!</p>
            </div>
        </div>
    );
};

export default OfferPage;