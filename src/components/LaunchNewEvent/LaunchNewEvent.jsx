"use client"
import { postNewEvent } from '@/customs/postData';
import axios from 'axios';
import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';

// Dynamically import JoditEditor with ssr: false
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const img_hosting_key = process.env.NEXT_PUBLIC_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const LaunchNewEvent = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [categ, setCateg] = useState('');
    const [locat, setLocat] = useState('');


    const handleForm = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const category = categ;
        const location = locat;
        const price = form.price.value;
        const photoFile = form.photo.files[0];
        const description = content;

         // Custom validation for content
         if (!description) {
            Swal.fire({
                icon: "error",
                title: "Description is required",
                text: "Please add a description for the event",
            });
            return;
        }

        try {
            // upload image to imgbb and than get an url
            const formData = new FormData();
            formData.append("image", photoFile);
            const imgRes = await axios.post(img_hosting_api, formData);
            const eventImage = imgRes?.data?.data?.display_url;

            // create form data with img url
            const newEvent = { name, date, time, category, location, price, eventImage, description };
            console.log(newEvent);

            // send the New Event data to backend
            const response = await postNewEvent(newEvent);

            console.log(response);
            if (response.status === 200) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New Event Created Successfully !",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error);
        }
        // reset 
        event.target.reset();
    }

    return (
        <div className='w-[90%] md:max-w-6xl mx-auto my-12'>
            <h1 className='text-5xl font-bold text-center mb-6'>Launch New Event</h1>
            <form onSubmit={handleForm} className='w-[780px] mx-auto space-y-4 bg-black text-white py-16 px-12 rounded-xl'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full flex flex-col'>
                        <label>Name</label>
                        <input type="text" name='name' className='py-2 px-4 text-black rounded-lg' placeholder='name' required/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <label>Date</label>
                        <input type="date" name='date' className='py-2 px-4 text-black rounded-lg' placeholder='Event Date' required/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full flex flex-col'>
                        <label>Time</label>
                        <input type="time" name='time' className='py-2 px-4 text-black rounded-lg' placeholder='Event Time' required/>
                    </div>
                    <div className='w-full flex flex-col'>
                        <label>Category</label>
                        <select value={categ} onChange={(e) => setCateg(e.target.value)} className='text-black py-2 px-4 rounded-lg' required>
                            <option value="" disabled>select category</option>
                            <option value="Conferences">Conferences</option>
                            <option value="Workshops">Workshops</option>
                            <option value="Concerts">Concerts</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:w-1/2 flex flex-col'>
                        <label>Ticket Price</label>
                        <input type="number" name='price' className='py-3 px-4 text-black rounded-lg' placeholder='name' required/>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col'>
                        <label>Location</label>
                        <select value={locat} onChange={(e) => setLocat(e.target.value)} className='text-black py-2 px-4 rounded-lg' required>
                            <option value="" disabled>select location</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Austria">Austria</option>
                        </select>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex flex-col'>
                    <label>Event Photo</label>
                    <input type="file" name='photo' className='py-2 px-4 bg-[#fefae0] text-black rounded-lg' required/>
                </div>
                <div className='w-full flex flex-col text-black'>
                    <label>Description</label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onChange={newContent => {
                            setContent(newContent);
                        }}
                    />
                </div>
                <button className='btn w-full bg-white text-black'>Submit</button>
            </form>
        </div>
    );
};

export default LaunchNewEvent;