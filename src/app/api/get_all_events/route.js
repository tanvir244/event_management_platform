import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (response) => {
    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');
        const allEvents = await allEventsCollection.find().toArray();
        return new NextResponse(JSON.stringify(allEvents));
    } catch (error) {
        return new NextResponse(JSON.stringify({message: 'Server error'}, {status: 500}))
    }
}