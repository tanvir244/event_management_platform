import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const bookedEvents = db.collection('bookedEvents');
        const searchEvents = await bookedEvents.find({userEmail: params.email}).toArray();
        return new NextResponse(JSON.stringify(searchEvents));
    } catch (error) {
        console.log(error);
    }
}