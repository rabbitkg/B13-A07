'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";

const Navbar = () => {

    const pathname = usePathname();

    const navStyle = (path) =>
        `flex gap-2 items-center text-md px-4 py-2 rounded-md transition-all ${
            pathname === path
                ? "bg-[#244D3F] text-white font-semibold"
                : "text-[#64748B] hover:bg-gray-100"
        }`;

    const navLinks = (
        <>
            <Link href="/" className={navStyle("/")}>
                <FaHome className="w-5 h-5" /> Home
            </Link>
            <Link href="/timeline" className={navStyle("/timeline")}>
                <MdOutlineWatchLater className="w-5 h-5" /> Timeline
            </Link>
            <Link href="/stats" className={navStyle("/stats")}>
                <ImStatsDots className="w-5 h-5" /> Stats
            </Link>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-350 mx-auto px-4">

                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                        />
                    </Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <div className="flex gap-2">
                        {navLinks}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;