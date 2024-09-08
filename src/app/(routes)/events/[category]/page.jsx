import EventCart from '@/components/EventListing/EventCart';
import React from 'react';

const page = ({params}) => {
    // http://localhost:3000/api/get_events_by_category/Workshops

    return (
        <div className="max-w-6xl mx-auto py-12">
            <h1 className="text-4xl font-semibold text-center mb-6">{params.category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* {
                    showData.map((event, index) => (
                        <EventCart key={index} event={event} />
                    ))
                } */}
            </div>
        </div>
    );
};

export default page;