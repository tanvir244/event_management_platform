import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const allEvents = db.collection('allEvents');
        const searchEvent = await allEvents.findOne({_id: new ObjectId(params.id)});
        return new NextResponse(JSON.stringify(searchEvent));
    } catch (error) {
        console.log(error);
    }
}