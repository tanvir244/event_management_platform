"use client"
import { postData } from '@/customs/postData';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import SocialSignIn from '../shared/SocialSignIn';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const img_hosting_key = process.env.NEXT_PUBLIC_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const Register = () => {
    const router = useRouter();

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const profileImageFile = form.profile.files[0];

        try {
            // Upload profile to imgbb and get the url 
            const formData = new FormData();
            formData.append("image", profileImageFile);
            const imgRes = await axios.post(img_hosting_api, formData);
            const profile = imgRes?.data?.data?.display_url;

            // Register data with profile image url
            const newUser = { name, email, password, profile }

            // Send the newUser data to backend
            const response = await postData(newUser);
            console.log(response);
            if(response.status === 200){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registratoin Successfull !",
                    showConfirmButton: false,
                    timer: 1500
                });
                event.target.reset();
            }

            // if you want to see the response in console
            // const result = await response.json();
            // console.log(result);

            // now social signed in 
            const resp = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            console.log(resp.status === 200);
            if (resp.status === 200) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registratoin Successfull !",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push('/');
            } else {
                console.log('Login failed', resp);
            }

        } catch (error) {
            console.error("Registration faild", error);
        }
    }

    return (
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-between px-6 md:px-0 py-16 lg:py-28 gap-12 lg:gap-0'>
            <div className='space-y-1 lg:space-y-4 w-[360px] mx-auto'>
                <h1 className='text-5xl font-bold lg:mt-16'>Register Now</h1>
                <p className='text-lg'>If you are first time here, please register with your Email and Pssoword including addintonal required information.</p>
            </div>
            <div className="w-full md:w-[580px] mx-auto bg-[#0d1b2a] text-white rounded-lg px-12 py-20">
                {/* <h1 className="text-center font-semibold text-5xl mb-12">Register Now</h1> */}
                <form onSubmit={handleRegister}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <span className="text-base font-semibold">Name</span>
                            <input type="text" name="name" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-base font-semibold">Email</span>
                            <input type="email" name="email" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter email" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-base font-semibold">Password</span>
                            <input type="password" name="password" className="text-base text-black font-semibold p-2 rounded-md w-full" placeholder="Enter password" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-base font-semibold">Profile</span>
                            <div className='bg-white rounded-lg'>
                                <input type="file" name="profile" className="text-sm text-black font-semibold p-2 rounded-md" />
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-2 bg-white text-black mt-8 rounded-lg font-semibold">Register</button>
                    {/* {
                registerErr && <p className="text-red-600 font-semibold mt-4 text-center">{registerErr}</p>
            } */}
                </form>
                <SocialSignIn />
                <p className='mt-4'>Already registered ? please <Link href={'/login'} className='text-green-500'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;