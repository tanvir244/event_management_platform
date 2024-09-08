import { connectDB } from "@/lib/connectDB"

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');
        const categoryConference = await allEventsCollection.find({category: params.category}).toArray();
        return new Response(JSON.stringify(categoryConference));
    } catch (error) {
        return new Response(JSON.stringify({message: 'Server error'}, {status: 500}))
    }
}