import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (response) => {
    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');
        const allEvents = await allEventsCollection.find().toArray();
        // return data 
        return new NextResponse(JSON.stringify(allEvents), {status: 200});
    } catch (error) {
        return NextResponse.json({message: 'something went wrong'}, {status: 500});
    }
}