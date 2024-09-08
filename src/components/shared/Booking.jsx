"use client"
import { getBookedId } from '@/customs/getData';
import { bookingEvent } from '@/customs/postData';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Booking = ({ eventId }) => {
    const [bookedEvents, setBookedEvents] = useState([]);
    const [booked, setBooked] = useState(null);
    const session = useSession();
    const router = useRouter();
    console.log(session);

    useEffect(() => {
        const fetchData = async () => {
            const reson = await getBookedId(session?.data?.user?.email);
            setBookedEvents(reson);
            console.log(reson);
        }
        fetchData();
    }, [session?.data?.user?.email])

    // Check if event is already booked
    useEffect(() => {
        const checkExist = () => {
            const exist = bookedEvents.some((event) => event.eventId === eventId);
            setBooked(exist);
        };
        checkExist();
    }, [bookedEvents, eventId]);

    console.log(booked);

    // booking event 
    const handleBooking = async () => {
        if (session.status === 'unauthenticated') {
            router.push('/login');
        }

        // booking info 
        const userEmail = session?.data?.user?.email;
        const bookedInfo = { userEmail, eventId };

        // sending request to backend
        const bookEvent = await bookingEvent(bookedInfo);
        console.log(bookEvent);
        if (bookEvent.status === 200) {
            setBooked(true);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Booked Successfully !",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            setBooked(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already booked!",
            });
        }
    }

    return (
        <button onClick={handleBooking} className={`btn bg-green-600 text-white flex items-center gap-2 py-4 px-6 text-xl rounded-2xl hover:bg-white hover:text-black ${booked && 'bg-red-600'}`}><span className='text-2xl'><FaBookmark /></span>{booked ? 'Booked' : 'Book'}</button>
    );
};

export default Booking;