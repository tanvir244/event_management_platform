import { connectDB } from "@/lib/connectDB"

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const bookedEvents = db.collection('bookedEvents');
        const searchEvents = await bookedEvents.find({userEmail: params.email}).toArray();
        return new Response(JSON.stringify(searchEvents));
    } catch (error) {
        console.log(error);
    }
}