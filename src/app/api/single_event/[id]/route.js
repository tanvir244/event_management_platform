import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const allEvents = db.collection('allEvents');
        const searchEvent = await allEvents.findOne({_id: new ObjectId(params.id)});
        return new Response(JSON.stringify(searchEvent));
    } catch (error) {
        console.log(error);
    }
}