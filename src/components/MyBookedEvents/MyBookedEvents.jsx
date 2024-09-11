"use client"
import React, { useEffect, useState } from 'react';
import EventCart from '../EventListing/EventCart';
import { useSession } from 'next-auth/react';
import { getBookedId } from '@/customs/getData';
import { useRouter } from 'next/navigation';

const MyBookedEvents = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const currentUser = session?.user?.email;
    const [bookedIds, setBookedIds] = useState([]);
    const [bookedEvents, setBookedEvents] = useState([]);
    console.log(bookedIds);

    if(status === 'unauthenticated'){
        router.push('/login');
    }

    // fetch all my booked ID
    useEffect(() => {
        const fetchBookedId = async (currentUser) => {
            const response = await getBookedId(currentUser);
            setBookedIds(response);
        }
        fetchBookedId(currentUser);
    }, [currentUser])

    // Fetch all booked events based on booked IDs
    useEffect(() => {
        if (bookedIds.length > 0) {
            const fetchedEvents = async () => {
                try {
                    const eventsData = await Promise.all(
                        bookedIds.map(async (event) => {
                            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/single_event/${event.eventId}`);
                            const data = await res.json();
                            return data;
                        })
                    );
                    setBookedEvents(eventsData);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchedEvents();
        }
    }, [bookedIds])

    console.log(bookedEvents);

    return (
        <div className='bg-[bg-[#D7DCDD]]'>
            <div className="w-[90%] md:max-w-6xl mx-auto py-12">
                <h1 className="text-5xl font-bold text-center mb-16">My Booked Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        bookedEvents.map((event, index) => (
                            <EventCart key={index} event={event} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookedEvents;