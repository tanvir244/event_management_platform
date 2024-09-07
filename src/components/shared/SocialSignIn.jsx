// "use client"
import { postRegisterSocial } from '@/customs/postData';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const SocialSignIn = () => {
    const router = useRouter();

    const session = useSession();
    // const name = session?.user?.name;
    // const email = session?.user?.email;
    // const profile = session?.user?.image;
    // const userInfo = {name, email, profile};
    // console.log(userInfo);

    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider, { redirect: false });
        console.log('Sign-in response:', resp);
    };
    if(session.status === 'authenticated'){
        router.push('/')
    }


    return (
        <div>
            <button onClick={() => handleSocialLogin('google')} className='w-full bg-gray-400 hover:bg-gray-500 flex justify-center items-center gap-2 py-2 text-center text-3xl text-black mt-12 cursor-pointer'>
                <FcGoogle /> <span className='text-lg'>Sign In with Google</span>
            </button>
            <button onClick={() => handleSocialLogin('github')} className='w-full bg-gray-400 hover:bg-gray-500 flex justify-center items-center mb-6 gap-2 py-2 text-center text-3xl text-black mt-2 cursor-pointer'>
                <FaGithub /> <span className='text-lg'>Sign In with Github</span>
            </button>
        </div>
    );
};

export default SocialSignIn;