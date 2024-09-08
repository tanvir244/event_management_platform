export const getSingleData = async (id) => {
    const res = await fetch(`http://localhost:3000/api/single_event/${id}`)
    const data = res.json();
    return data;
}

export const getBookedId = async (currentUser) => {
    const res = await fetch(`http://localhost:3000/api/get_booking_events/${currentUser}`)
    const data = res.json();
    return data; 
}