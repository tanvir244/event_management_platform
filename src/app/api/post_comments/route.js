import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const newComment = await request.json();
        const db = await connectDB();
        const commentCollection = db.collection('allComments');
        const allComments = await commentCollection.insertOne(newComment);
        return new NextResponse(JSON.stringify({ message: 'Comment added successfully' }), { status: 200 });  
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
} 