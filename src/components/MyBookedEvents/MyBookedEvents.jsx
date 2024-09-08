"use client"
import React, { useEffect, useState } from 'react';
import EventCart from '../EventListing/EventCart';
import { useSession } from 'next-auth/react';
import { getBookedEvents } from '@/customs/getData';

const MyBookedEvents = () => {
    const { data: session } = useSession();
    const currentUser = session?.user?.email;
    const [bookedId, setBookedId] = useState([]);
    const [bookedEvent, setBookedEvent] = useState([]);
    console.log(bookedId);

    // fetch all my booked ID
    useEffect(() => {
        fetch(`http://localhost:3000/api/get_booking_events/${currentUser}`)
        .then(res => res.json())
        .then(data => setBookedId(data));
    }, [currentUser])
    console.log(bookedId);

    // fetching all my booked events
    useEffect(() => {
        const mapping = bookedId.map(event => (
            fetch(`http://localhost:3000/api/single_event/${event.id}`)
            .then(res => res.json())
            .then(data => setBookedEvent(...bookedEvent))
        ))
    }, [bookedEvent, bookedId])

    console.log(bookedEvent);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* {
                    bookedId.map((event, index) => (
                        <EventCart key={index} event={event} />
                    ))
                } */}
            </div>
        </div>
    );
};

export default MyBookedEvents;