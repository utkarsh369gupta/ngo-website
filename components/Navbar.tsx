import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row bg-black p-3 pb-0 md:pl-10'>
            <div className='hidden md:block flex-none w-32'>
                <img src="images/logo.png" alt="Logo" className="w-32 h-32 mb-4 md:mb-0" />
            </div>
            <div className='flex-none w-full'>
                <div className="bg-black p-2 md:p-5 text-white flex flex-col md:flex-row justify-around items-center md:pl-64">
                    <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0 text-sm md:text-base space-y-1 md:space-y-0 md:space-x-4">
                        <div className="flex items-center">
                            <i className="fas fa-envelope mr-2"></i>
                            writeus@hearthealing.org
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone mr-2"></i>
                            +91 9999999999
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-0 text-sm md:text-base">
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
                <div className="flex flex-col md:flex-row justify-around items-center bg-gray-200 p-2 md:p-3">
                    <div className="flex flex-col md:flex-row justify-start space-y-1 md:space-y-0 md:space-x-2">
                        <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-1 px-2 md:py-2 md:px-4 rounded">
                            Home
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-1 px-2 md:py-2 md:px-4 rounded">
                            Who Are We
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-1 px-2 md:py-2 md:px-4 rounded">
                            What We Do
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-1 px-2 md:py-2 md:px-4 rounded">
                            Get Involved
                        </button>
                        <button className="bg-blue-100 hover:bg-blue-700 text-blue-500 font-bold py-1 px-2 md:py-2 md:px-4 rounded">
                            Resources
                        </button>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-3xl mt-2 md:mt-0">
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};
