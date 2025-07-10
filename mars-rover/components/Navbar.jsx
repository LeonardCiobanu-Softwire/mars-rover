import Link from "next/link";

const Links = [
    { href: '/', label: 'Home' },
    { href: '/photos', label: 'Photos' },
    { href: '/contact', label: 'contact' },
];

import React from "react"

const Navbar = () => {
    return (
        <nav className="bg-base-300">
            <div className="navbar max-w-6xl mx-auto flex-auto">
                <Link href="/" className="btn btn-primary">
                    Home
                </Link>
                <Link href="/photos">
                    Photos
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
};
export default Navbar;