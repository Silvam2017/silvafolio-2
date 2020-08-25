import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <h1>Michael Silva - Web Developer</h1>
                </Link>

                <nav className="flex-row justify-space-between-lg justify-center align-center">
                    <a href="#about">About Me</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;