"use client"
import { getComments } from '@/customs/getData';
import { postComments } from '@/customs/postData';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Comments = ({ postId }) => {
    const [comment, setComment] = useState('');
    const [showComments, setShowComments] = useState([]);
    const router = useRouter();
    const { data: session, status } = useSession();
    const userName = session?.user?.name;
    const userEmail = session?.user?.email;
    const userImage = session?.user?.image;
    const userProfile = session?.user?.profile;

    // function to fetch comments
    const fetchComments = async (postId) => {
        const response = await getComments(postId);
        console.log(response);
        setShowComments(response);
    }
    
    // Fetch comments when the component loads or postId changes
    useEffect(() => {    
        fetchComments(postId);
    }, [postId])

    const handleComment = async (e) => {
        e.preventDefault();

        // redirect to login if user not exist
        if (status === 'unauthenticated') {
            router.push('/login');
        }

        // comment info
        const commentInfo = { postId, name: userName, email: userEmail, profile: userImage || userProfile, comment_detail: comment }
        console.log(commentInfo);

        // send comment request to backend
        const res = await postComments(commentInfo);
        console.log(res);

        // If the comment is posted successfully, fetch the updated comments
        if(res.status === 200){
            setComment('');  // clear the comment input field
            fetchComments(postId); // Re-fetch comments to update the UI
        } else {
            console.error("Failed to post comment", res);
        }
    }

    return (
        <div>
            <h1 className='text-lg font-bold mb-4'>Comments</h1>
            <div className='border-b border-black mb-2'>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className='w-full text-lg font-semibold py-2 px-4' />
            </div>
            <div className='flex justify-end'>
                <button onClick={handleComment} className='btn bg-[#001427] py-2 px-4 rounded-xl text-white'>send</button>
            </div>
            {
                showComments.map((comment => (
                    <div key={comment._id} className='flex flex-col md:flex-row gap-2 md:gap-8 mb-4'>
                <div>
                    <Image
                        src={comment.profile}
                        alt='user'
                        width={90}
                        height={90}
                        style={{ objectFit: 'cover' }}
                        className='rounded-full'
                    />
                </div>
                <div>
                    <h1 className='text-xl mb-2 font-bold'>{comment.name}</h1>
                    <p>{comment.comment_detail}</p>
                </div>
            </div>
                )))
            }
        </div>
    );
};

export default Comments;