import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const newEvent = await request.json();
    try {
        const db = await connectDB();
        const allEvents = db.collection('allEvents');
        const res = await allEvents.insertOne(newEvent);
        return Response.json({message: "New event added"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}