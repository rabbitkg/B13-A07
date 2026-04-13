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
        `flex gap-1 items-center text-md px-4 py-3 rounded-sm transition-all ${pathname === path
            ? "bg-[#244D3F] text-white font-semibold"
            : "text-[#64748B]"
        }`;

    const links = <>
        <div className="flex gap-4">
            <Link href="/" className={navStyle("/")}>
                <FaHome className="w-6 h-6" />Home
            </Link>
            <Link href="/timeline" className={navStyle("/timeline")}>
                <MdOutlineWatchLater className="w-6 h-6" />Timeline
            </Link>
            <Link href="/stats" className={navStyle("/stats")}>
                <ImStatsDots className="w-6 h-6" />Stats
            </Link>
        </div>
    </>

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-350 mx-auto">
                <div className="navbar-start">
                    <Link href="/"><Image src="/assets/logo.png" alt="Logo" width={141} height={50} /></Link>
                </div>

                <div className="navbar-end">
                    {links}
                </div>
            </div>
        </div>
    );
};

export default Navbar;