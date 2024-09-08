import Image from 'next/image';
import React from 'react';
import { FaHashtag, FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from "react-icons/fa";
import Link from 'next/link';

const EventCart = ({ event }) => {
    const { _id, eventImage, name, date, location, category, description } = event;
    // console.log(event);
    return (
        <div className='shadow-2xl bg-[#001427] rounded-xl text-white'>
            <div className='w-full h-[250px] relative'>
                <Image
                    src={eventImage}
                    alt="event_moment"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={eventImage}
                    className='rounded-t-xl'
                />
            </div>
            <div className='py-6 px-8'>
                <h3 className='text-3xl font-bold'>{name}</h3>
                <div className='flex gap-8 mt-3 mb-2'>
                    <div className='flex gap-2 items-center'><FaLocationDot /><span className='text-sm'>{location}</span></div>
                    <div className='flex gap-2 items-center'><FaCalendarAlt /><span>{date}</span></div>
                    <div className='flex gap-2 items-center'><FaHashtag /><span>{category}</span></div>
                </div>
                {description.length > 150 ? (
                    <div contentEditable='false' dangerouslySetInnerHTML={{ __html: description.slice(0, 170) + '... <span style="color:[#757575];">see more</span>' }}></div>
                ) : (
                    <div contentEditable='false' dangerouslySetInnerHTML={{ __html: description }}></div>
                )}

                <div className='flex justify-end'>
                    <Link href={`/event_details/${_id}`}>
                        <button className='btn py-2 px-6 bg-white text-black font-semibold rounded-lg'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCart;