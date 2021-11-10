import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'


const Header = () => {

return (
    <div class="header flex justify-between w-auto px-8 py-4">
        <Link to="/">
           <p class="site-title top-4 left-6 self-center">web<span class="colors-green">site.</span></p>
        </Link>
        <div class="space-x-4 top-4 right-4 self-center">
            <button class="home square-btn m-3 "></button>
            <button class="home profile-dp"></button>
        </div>
    </div>
    );
};
export default Header;