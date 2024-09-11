import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#001427] text-white">
            <div className="py-16 md:py-24">
                <footer className="text-base-content w-[90%] md:max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="">
                            <Link href='/'>
                                <h2 className="text-3xl font-bold">Event Wave</h2>
                            </Link>
                            <p className=" mt-4">Event Management Ltd.<br />A cultural event management platform</p>
                            <div className="space-y-4 mt-6">
                                <ul className="flex gap-6 justify-start">
                                    <li className="text-4xl"><a href="https://github.com/tanvir244"><FaGithub /></a></li>
                                    <li className="text-4xl"><a href="https://www.facebook.com/tanvirrahman.saim.7"><FaFacebook /></a></li>
                                    <li className="text-4xl"><a href="https://twitter.com/Tanvir339077"><FaXTwitter /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </div>
                </footer>
            </div>
            <footer className="flex justify-center p-4 bg-base-300 font-semibold text-base-content">
                    <p>Copyright © 2024 - All right reserved by Tanvir</p>
            </footer>
        </div>
    );
};

export default Footer;