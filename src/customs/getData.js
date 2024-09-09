export const getSingleData = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/single_event/${id}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getBookedId = async (currentUser) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_booking_events/${currentUser}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getComments = async (postId) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_comments/${postId}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getDataByCategory = async (category) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_events_by_category/${category}`);
        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}