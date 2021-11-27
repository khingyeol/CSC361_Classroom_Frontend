import React from 'react';
import { Link } from 'react-router-dom';
// import '../../index.css'

//ดึง api เส้นใหม่ GET /auth และ
//ถ้ามัน Response 401 ให้ window.location.reload() 
//แต่ถ้า Response 200 เอา res.data.data มาใช้ใน Header ได้เลย

const Header = () => {

return (
    <div className="header flex justify-between w-auto px-8 py-4">
        <Link to="/">
            <h1 className="top-4 left-6 self-center">web<span className="colors-green">site</span></h1>
        </Link>
    </div>
    );
};
export default Header;