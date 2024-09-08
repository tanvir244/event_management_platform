import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    try {
        const bookingEvent = await request.json();
        const db = await connectDB();
        const bookingCollection = db.collection('bookedEvents');

        // Check if the event is already booked
        const exist = await bookingCollection.findOne({ userEmail: bookingEvent.userEmail, eventId: bookingEvent.eventId });
        if (exist) {
            // Event is already booked by this user
            return new Response(JSON.stringify({ message: "Event already exists" }), { status: 304 });
        }

        // Insert the new booking into the collection
        const resp = await bookingCollection.insertOne(bookingEvent);

        // If insert is successful, return a success message
        return new Response(JSON.stringify({ message: "New event booked successfully" }), { status: 200 });

    } catch (error) {
        console.error('Error while booking event:', error);
        // Return an error response if something goes wrong
        return new Response(JSON.stringify({ message: "An error occurred while booking the event" }), { status: 500 });
    }
};
