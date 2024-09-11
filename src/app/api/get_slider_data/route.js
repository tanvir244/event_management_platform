import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await connectDB();
        const sliderCollection = db.collection('sliderData');
        const slider = await sliderCollection.find().toArray();
        return new NextResponse(JSON.stringify(slider));
    } catch (error) {
        return new NextResponse(JSON.stringify({message: 'Server error'}, {status: 500}))
    }
}