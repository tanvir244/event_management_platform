import axios from "axios";

// Function to get a single event's data using Axios
export const getSingleData = async (id) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/single_event/${id}`);
        return res.data; // Axios automatically parses the response
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Function to get booked events by user using Axios
export const getBookedId = async (currentUser) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_booking_events/${currentUser}`);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Function to get comments for a post using Axios
export const getComments = async (postId) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_comments/${postId}`);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Function to get events by category using Axios
export const getDataByCategory = async (category) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_events_by_category/${category}`);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
