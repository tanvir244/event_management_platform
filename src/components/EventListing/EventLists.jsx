"use client";
import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import EventCart from "./EventCart";
import { getDataByCategory, getDataByLocation } from "@/customs/getData";

const EventLists = () => {
    // pagination
    const [currentPage, setCurrentPage] = useState(0);

    // =======
    const [eventsData, setEventsData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [search, setSearch] = useState('');
    const [openClose, setOpenClose] = useState(false);
    const [categFilter, setCategFilter] = useState(null);
    const [locatFilter, setLocatFilter] = useState(null);
    const [cat, setCat] = useState([]);
    const [lot, setLot] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_events/${currentPage}`);
                const data = await response.json();
                setEventsData(data);
                setShowData(data);
                console.log(data);
                console.log(eventsData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchData();
    }, [currentPage])


    useEffect(() => {
        if (!search) {
            setShowData(eventsData);
            return;
        }

        const names = showData.map((event) => event.name.toLowerCase());
        const searchItems = names.includes(search.toLowerCase());
        const filteredEvents = showData.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))

        if (filteredEvents.length > 0) {
            setShowData(filteredEvents);
        } else {
            setShowData([]);
        }

    }, [eventsData, search])

    useEffect(() => {
        if (categFilter) {
            const fetchCategory = async (categFilter) => {
                const resCateg = await getDataByCategory(categFilter);
                setCat(resCateg);
            }
            fetchCategory(categFilter);
        }
        if (locatFilter) {
            const fetchLocation = async (locatFilter) => {
                const resLocat = await getDataByLocation(locatFilter);
                setLot(resLocat);
            }
            fetchLocation(locatFilter);
        }
    }, [categFilter, locatFilter])


    const filterData = async (categ, locat) => {
        let filteredData = eventsData;

        if (categ && locat) {

            const matchedCateg = cat.filter(item => item.category === categ);
            const checkBoth = matchedCateg.filter(item => item.location === locat);
            filteredData = checkBoth;
        } else if (categ) {
            filteredData = cat.filter(item => item.category === categ);
        } else if (locat) {
            filteredData = lot.filter(item => item.location === locat);
        }
        setShowData(filteredData);
        console.log(cat);
    };

    const sortedData = (sortType) => {
        if (sortType === "latest") {
            const sortByDate = [...showData].sort((a, b) => new Date(b.date) - new Date(a.date));
            setShowData(sortByDate);
            console.log(sortByDate);
        }
    };

    // paginaiton
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    }
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    useEffect(() => {
        console.log('Updated showData:', showData);
    }, [showData]);


    return (
        <div className="w-[90%] md:max-w-6xl mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-6">Available Events</h1>
            <div className="relative flex flex-col md:flex-row justify-center md:justify-between gap-4 mb-12">
                <div className="flex justify-center">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className='w-[230px] py-2 px-4 rounded-lg bg-[#001427] text-white font-semibold text-lg' placeholder='Search events' />
                </div>
                <div className="flex justify-center gap-6">
                    <select
                        onChange={(e) => sortedData(e.target.value)}
                        className="bg-black py-2 px-6 text-white rounded-lg"
                    >
                        <option value="" disabled selected>
                            Sort
                        </option>
                        <option value="latest">Latest</option>
                    </select>
                    <div className="text-white flex rounded-xl w-[260px] cursor-pointer">
                        <span onClick={() => setOpenClose(!openClose)} className="bg-gray-600 w-[60%] p-3 flex items-center gap-4"><span>Select</span> <FaArrowDown /></span>
                        <span onClick={() => filterData(categFilter, locatFilter)} className="bg-black w-[40%] p-3 cursor-pointer hover:bg-[#001427]">Filter</span>
                    </div>
                    <div className={`absolute  top-[60px] right-[95px] bg-gray-600 py-4 px-2 ${openClose ? 'block' : 'hidden'}`} style={{ zIndex: 10 }}>
                        <div className="flex flex-col gap-2">
                            <select value={categFilter} onChange={(e) => setCategFilter(e.target.value)} className="bg-black py-2 px-6 text-white rounded-lg">
                                <option value="" disabled selected>Category</option>
                                <option value="Conferences">Conferences</option>
                                <option value="Workshops">Workshops</option>
                                <option value="Concerts">Concerts</option>
                            </select>
                            <select value={locatFilter} onChange={(e) => setLocatFilter(e.target.value)} className="bg-black py-2 px-6 text-white rounded-lg">
                                <option value="" disabled selected>Location</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Austria">Austria</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    showData.map((event, index) => (
                        <EventCart key={index} event={event} />
                    ))
                }
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center gap-8 mt-12 mb-20">
                <button
                    onClick={prevPage}
                    className="btn bg-gray-300 px-4 py-2 rounded"
                >
                    Previous
                </button>
                <span className="flex items-center font-bold text-lg">{currentPage}</span>
                <button
                    onClick={nextPage}
                    className="btn bg-gray-300 px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default EventLists;