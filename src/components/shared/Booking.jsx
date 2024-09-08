"use client"
import { bookingEvent } from '@/customs/postData';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaBookmark } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Booking = ({ eventId }) => {
    const session = useSession();
    const router = useRouter();
    console.log(session);

    // booking event 
    const handleBooking = async (id) => {
        if (session.status === 'unauthenticated') {
            router.push('/login');
        }

        // booking info 
        const userEmail = session?.data?.user?.email;
        const eventId = id;
        const bookedInfo = { userEmail, id };

        // sending request to backend
        const bookEvent = await bookingEvent(bookedInfo);
        console.log(bookEvent);
        if (bookEvent.status === 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Booked Successfully !",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already booked!",
            });
        }
    }

    return (
        <button onClick={() => handleBooking(eventId)} className='btn bg-green-600 text-white flex items-center gap-4 py-4 px-8 text-xl rounded-2xl hover:bg-white hover:text-black'><span className='text-2xl'><FaBookmark /></span>Book</button>
    );
};

export default Booking;