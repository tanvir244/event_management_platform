"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { signIn } from 'next-auth/react';
import Swal from 'sweetalert2';
import SocialSignIn from '../shared/SocialSignIn';

const Login = () => {
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: false, 
        });

        console.log(resp);
        if (resp.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign In Complete !",
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/');
        } else {
            console.log('Login failed', resp);
        }
    }

    return (
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-between px-6 md:px-0 py-16 lg:py-28 gap-12 lg:gap-0'>
            <div className='space-y-1 lg:space-y-4 text-center'>
                <h1 className='text-5xl font-bold lg:mt-16'>Please Login</h1>
                <p className='text-lg'>Let us know your identity please!</p>
            </div>
            <div className="w-full md:w-[520px] mx-auto bg-[#0d1b2a] text-white rounded-lg px-12 py-16">
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col gap-2">
                        <div>
                            <span className="text-base font-semibold">Email</span>
                            <input type="email" name="email" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter email" />
                        </div>
                        <div>
                            <span className="text-base font-semibold">Password</span>
                            <input type="password" name="password" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter password" />
                        </div>
                    </div>
                    <button className="w-full py-2 bg-white text-black mt-4 rounded-lg font-semibold">Login</button>
                </form>
                <SocialSignIn />
                <p>First time here? Please <Link href={'/register'} className='text-green-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;