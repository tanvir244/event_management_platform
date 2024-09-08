import { connectDB } from "@/lib/connectDB"

export const GET = async (response, {params}) => {
    try {
        const db = await connectDB();
        const commentCollection = db.collection('allComments');
        const expectedComments = await commentCollection.find({postId: params.id}).toArray();
        return new Response(JSON.stringify(expectedComments));
    } catch (error) {
        return new Response(JSON.stringify(error, {status: 500}))
    }
}