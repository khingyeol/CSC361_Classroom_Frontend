import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'
import {useParams} from 'react-router-dom'

const Navigation = () => {
    const { classid } = useParams();

    return (
        <div className="relative h-full">
            <Link to="/">
                <div className="nav-list w-full flex space-x-4 flex-wrap content-center">
                    <svg className="w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 28.79"><g data-name="Layer 2"><path d="M40 9.68a1.82 1.82 0 0 1-1.12 1c-.88.36-1.74.75-2.63 1.14V26a2.08 2.08 0 0 1-.07.61 1.22 1.22 0 0 1-1.31.88 1.26 1.26 0 0 1-1.11-1.14 3.05 3.05 0 0 1 0-.43v-13a11.32 11.32 0 0 0-1.1.49c-.09 0-.14.25-.14.39 0 2.24-.08 4.49 0 6.73a6.24 6.24 0 0 1-2.93 5.61 14.15 14.15 0 0 1-5.71 2.29A19.76 19.76 0 0 1 13 27.52a9.58 9.58 0 0 1-4.45-3.18 5.25 5.25 0 0 1-1.05-3.25v-7.2a.57.57 0 0 0-.4-.63C5 12.39 3 11.48.91 10.59A1.31 1.31 0 0 1 0 9.47a1.26 1.26 0 0 1 .9-1.32L8.16 5 19.29.16a1.64 1.64 0 0 1 1.42 0q9.12 4 18.24 7.92a1.8 1.8 0 0 1 1 1ZM4.43 9.36l.37.18L19.68 16a.91.91 0 0 0 .65 0l9.06-3.92.37-.19-.26-.07-9.5-1.2a1.26 1.26 0 1 1 .26-2.49l2.55.32c3.72.46 7.44.92 11.15 1.41.64.08 1.05-.31 1.67-.47l-.28-.15-15-6.51a.91.91 0 0 0-.65 0L6 8.68ZM10 14.54v6.52a3.05 3.05 0 0 0 .73 2 6.85 6.85 0 0 0 2.78 2 17.16 17.16 0 0 0 12.28.3 8.12 8.12 0 0 0 3.16-1.89A3.3 3.3 0 0 0 30 20.88v-6.33l-.44.17-8.83 3.85a1.7 1.7 0 0 1-1.46 0L11.19 15Z" styles="fill:#1c1c1c" data-name="Layer 1"/></g></svg>
                    <span> Cyber-Coding </span>
                </div>
            </Link>

            <div className="flex flex-wrap content-center items-stretch">
                {/* <CallClass /> */}
                <Link to={`/${classid}`}><div className="class-list ">feed</div></Link>
                <Link to={`/${classid}/assignment`}><div className="class-list bg-green bg-opacity-30">assignment</div></Link>
                <Link to={`/${classid}/exam`}><div className="class-list">examination</div></Link>
            </div>



            <div className='absolute w-full bottom-24 '>
            <div className=' p-8 flex justify-between'>
            <Link to='/faq'>
                <div className='rounded-full bg-grey bg-opacity-10 h-14 w-14'></div>
            </Link>

            <Link to='/setting'>
                <div className='rounded-full bg-grey bg-opacity-10 h-14 w-14'></div>
            </Link>
            </div>
            </div>
        </div>
    );
};
export default Navigation;