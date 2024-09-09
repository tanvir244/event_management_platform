import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const commentCollection = db.collection('allComments');
        const expectedComments = await commentCollection.find({postId: params.id}).toArray();
        return new NextResponse(JSON.stringify(expectedComments));
    } catch (error) {
        return new NextResponse(JSON.stringify(error, {status: 500}))
    }
}