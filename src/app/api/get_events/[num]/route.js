import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const number = parseInt(params.num);
    const skip = number * 6;

    try {
        const db = await connectDB();
        const allEventsCollection = db.collection('allEvents');

        const allEvents = await allEventsCollection.find().skip(skip).limit(6).toArray();
        return new NextResponse(JSON.stringify(allEvents), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Server error' }), { status: 500 });
    }
}
