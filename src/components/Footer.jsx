import Image from 'next/image';
import React from 'react';

const FooterSection = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-12 px-4">
            <div className="max-w-5xl mx-auto">

                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                        KeenKeeper
                    </h1>
                    
                    <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto mb-8">
                        Your personal shelf of meaningful connections. 
                        Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <div className="mb-10">
                        <p className="text-lg font-medium mb-4 text-gray-200">
                            Social Links
                        </p>
                        
                        <div className="flex justify-center gap-4 md:gap-6">
                            <a 
                                href="#" 
                                className="bg-white hover:bg-gray-100 transition-colors p-2.5 rounded-full"
                                aria-label="Instagram"
                            >
                                <Image 
                                    src="/assets/instagram.png" 
                                    alt="Instagram" 
                                    width={42} 
                                    height={42} 
                                    className="w-10 h-10 md:w-11 md:h-11"
                                />
                            </a>

                            <a 
                                href="#" 
                                className="bg-white hover:bg-gray-100 transition-colors p-2.5 rounded-full"
                                aria-label="Facebook"
                            >
                                <Image 
                                    src="/assets/facebook.png" 
                                    alt="Facebook" 
                                    width={42} 
                                    height={42} 
                                    className="w-10 h-10 md:w-11 md:h-11"
                                />
                            </a>

                            <a 
                                href="#" 
                                className="bg-white hover:bg-gray-100 transition-colors p-2.5 rounded-full"
                                aria-label="Twitter"
                            >
                                <Image 
                                    src="/assets/twitter.png" 
                                    alt="Twitter" 
                                    width={42} 
                                    height={42} 
                                    className="w-10 h-10 md:w-11 md:h-11"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 my-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p className="text-center md:text-left">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-6">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;