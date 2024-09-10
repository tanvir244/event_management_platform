import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');

        // Skip the first 6 documents and retrieve the next 6
        const allEvents = await allEventsCollection.find().skip(6).limit(6).toArray();

        return new NextResponse(JSON.stringify(allEvents), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Server error' }), { status: 500 });
    }
}
