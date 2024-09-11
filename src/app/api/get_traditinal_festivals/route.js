import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await connectDB();
        const traditionalCollection = db.collection('traditionalFestival');
        const traditionals = await traditionalCollection.find().toArray();
        return new NextResponse(JSON.stringify(traditionals));
    } catch (error) {
        return new NextResponse(JSON.stringify({message: 'Server error'}, {status: 500}))
    }
}