// components/Navbar.tsx
import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <div className='flex bg-black p-3 pb-0 pl-10'>
            <div className='flex-none w-32'>
                <img src="images/logo.png" alt="Logo" className="w-32 h-32 mb-4 md:mb-0" />
            </div>
            <div className='flex-none w-full'>
                <div className="bg-black p-5 text-white flex flex-col md:flex-row justify-around items-center pl-64">
                    <div className="flex items-center mb-4 md:mb-0">
                        <i className="fas fa-envelope mr-2"></i>
                        writeus@hearthealing.org
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <i className="fas fa-phone mr-2"></i>
                        +91 9999999999
                    </div>
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center bg-gray-200 p-3">

                    <div className="flex ">
                        <div className='justify-start'>
                            <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
                                Home
                            </button>
                            <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
                                Who Are We
                            </button>
                            <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
                                What We Do
                            </button>
                            <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
                                Get Involved
                            </button>
                            <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
                                Resources
                            </button>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
