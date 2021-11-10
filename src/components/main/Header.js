import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'


const Header = () => {

return (
    <div className="header flex justify-between w-auto px-8 py-4">
        <Link to="/">
            <h1 className="top-4 left-6 self-center">web<span className="colors-green">site</span></h1>
        </Link>
        <div className="space-x-4 top-4 right-4 self-center">
            <button className="home square-btn m-3 "></button>
            <button className="home profile-dp"></button>
        </div>
    </div>
    );
};
export default Header;