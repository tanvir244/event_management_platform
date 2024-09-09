import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newEvent = await request.json();
    try {
        const db = await connectDB();
        const allEvents = db.collection('allEvents');
        const res = await allEvents.insertOne(newEvent);
        return NextResponse.json({message: "New event added"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}