import React, { useState } from "react";
import HERO_IMG from '../assets/hero_img.webp';
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const LandingPage = () => {
    const navigate = useNavigate();
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState('login');
    const handleCTA = () => { }
    return (
        <div className="w-full min-h-full bg-white pb-10 ">
            <div className="container mx-auto px-4 py-6">
                <header className="flex justify-between items-center mb-16">
                    <div className="text-xl font-bold">Resume Builder</div>
                    <button className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer" onClick={()=> setOpenAuthModal(true)}>Login / Sign Up </button>
                </header>
                {/* hero content */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Build Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-green-500 animate-text-shine font-extrabold">
                                Resume Effortlessly
                            </span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8"> Craft a standout resume in minutes with our easy-to-use builder.</p>
                        <button className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer" onClick={handleCTA}> Get Started</button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={HERO_IMG} alt="hero" className="w-full rounded-lg" />
                    </div>
                </div>
                {/* Features */}
                <section className="mt-5">
                    <h2 className="text-2xl font-bold text-center mb-12">Features that Make You Shine</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition ">
                            <h3 className="text-lg font-semibold mb-3"> Easy Editing</h3>
                            <p className="text-gray-600"> Update your resume sections with live preview and instant formating .</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3"> Beautiful Templates</h3>
                            <p className="text-gray-600">Choose from modern, professional templates that are easy to customize</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                One-click Download
                            </h3>
                            <p className="text-gray-600">
                                Download your resume instantly in PDF format, ready to impress employers.
                            </p>

                        </div>

                    </div>

                </section>
                {/* Testimonials */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-center mb-12">What Our Users Say</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition mb-8 md:mb-0 md:mr-4">
                            <p className="text-gray-600">"I landed my dream job thanks to the amazing resume I created with this builder!"</p>
                            <p className="mt-4 font-semibold">John Doe</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <p className="text-gray-600">"The templates are stunning and so easy to use. Highly recommend!"</p>
                            <p className="mt-4 font-semibold">Jane Smith</p>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <footer className="mt-16 text-center">
                    <p className="text-gray-600">© 2025 Resume Builder. All rights reserved.</p>
                    <div className="flex justify-center mt-4">
                        <a href="#" className="text-gray-600 mx-2">Privacy Policy</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-gray-600 mx-2">Terms of Service</a>
                    </div>
                </footer>

            </div>
            {/* Auth Modal */}
            <Modal isOpen={openAuthModal} onClose={() => {
                setOpenAuthModal(false);
                setCurrentPage('login');
            }} hideHeader>
                <div className="">
                    {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
                    {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
                   
                </div>

            </Modal>
        </div>
    )
}
export default LandingPage 