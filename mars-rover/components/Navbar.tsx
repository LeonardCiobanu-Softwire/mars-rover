import Link from "next/link";
import * as React from 'react';
import Button from '@mui/material/Button';
import {ButtonGroup} from "@mui/material";

const Links = [
    { href: '/', label: 'Home' },
    { href: '/photos', label: 'Photos' },
    { href: '/contact', label: 'contact' },
];

const Navbar = () => {
    return (
        <nav className="bg-base-300">
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button color="inherit" href="/">
                    Home
                </Button>
                <Button color="inherit" href="/photos">
                    Photos
                </Button>
                <Button color="inherit" href="/contact">
                    Contact
                </Button>
            </ButtonGroup>
        </nav>
    );
};
export default Navbar;