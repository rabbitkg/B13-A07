import Image from 'next/image';
import React from 'react';

const FooterSection = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-12">
            <div className="max-w-5xl mx-auto text-center px-4">

                <h1 className="text-6xl font-bold mb-4">KeenKeeper</h1>
                <p className="text-sm text-gray-400 mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <div className="mb-8">
                    <p className="mb-3 text-xl">Social Links</p>

                    <div className="flex justify-center gap-4">
                        <a href="#" className="bg-white text-black p-1 rounded-full">
                            <Image src="/assets/instagram.png" alt="Instagram" width={40} height={40} />
                        </a>

                        <a href="#" className="bg-white text-black p-1 rounded-full">
                            <Image src="/assets/facebook.png" alt="Facebook" width={40} height={40} />
                        </a>

                        <a href="#" className="bg-white text-black p-1 rounded-full">
                            <Image src="/assets/twitter.png" alt="Twitter" width={40} height={40} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/20 my-6"></div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6 mt-3 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;