import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');
        const location = await allEventsCollection.find({location: params.location}).toArray();
        return new NextResponse(JSON.stringify(location));
    } catch (error) {
        return new NextResponse(JSON.stringify({message: 'Server error'}, {status: 500}))
    }
}