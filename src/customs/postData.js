export const postData = async (newUser) => {
    const response = await fetch("http://localhost:3000/api/post_register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    })
    return response;
}

export const postNewEvent = async (newEvnet) => {
    const response = await fetch('http://localhost:3000/api/post_all_events', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvnet),
    })
    return response;
}

export const bookingEvent = async (bookingInfo) => {
    const response = await fetch('http://localhost:3000/api/booking_event', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
    })
    return response;
}