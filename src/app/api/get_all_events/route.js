import { connectDB } from "@/lib/connectDB"

export const GET = async (response) => {
    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');
        const allEvents = await allEventsCollection.find().toArray();
        // return data 
        return new Response(JSON.stringify(allEvents), {status: 200});
    } catch (error) {
        return Response.json({message: 'something went wrong'}, {status: 500});
    }
}