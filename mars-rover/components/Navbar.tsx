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
        <nav className="bg-base-300" style={{ position: 'absolute', top: 20, right: 30}}>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button color="inherit" href="/" style={{backgroundColor: "#662d91", color: "#ffffff"}}>
                    Home
                </Button>
                <Button color="inherit" href="/photos" style={{backgroundColor: "#662d91", color: "#ffffff"}}>
                    Photos
                </Button>
                <Button color="inherit" href="/contact" style={{backgroundColor: "#662d91", color: "#ffffff"}}>
                    Contact
                </Button>
            </ButtonGroup>
        </nav>
    );
};
export default Navbar;