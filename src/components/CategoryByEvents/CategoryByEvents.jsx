"use client"
import { getDataByCategory } from '@/customs/getData';
import React, { useEffect, useState } from 'react';
import EventCart from '../EventListing/EventCart';

const CategoryByEvents = ({category}) => {
    const [dataByCateg, setDataByCateg] = useState([]);
    console.log(category);
    useEffect(() => {
        const fetchedData = async () => {
            const res = await getDataByCategory(category);
            setDataByCateg(res); 
            // console.log(data);
        } 
        fetchedData(category);
    }, [category])

    return (
        <div className="max-w-6xl mx-auto py-12">
            <h1 className="text-5xl font-bold text-center mb-12">{category}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    dataByCateg.map((event, index) => (
                        <EventCart key={index} event={event} />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryByEvents;