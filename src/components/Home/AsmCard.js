import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'

const AsmCard = () => {

    return (
        <div className="container4">
            <div className="box asm justify-between flex-wrap content-center">
                <div className="flex flex-wrap content-center">
                    <div className="rounded-full bg-green bg-opacity-10 h-14 w-14">

                    </div>
                    <div className="self-center">
                        <h4>⚠️ ส่งงาน Network Final Project</h4>
                        <span className="text-grey color-grey">21 Jun. 2020</span>
                    </div>
                </div>
                <div className="self-center">
                </div>

                <div className="self-center">
                    <b>12 ธ.ค.</b>
                </div>
                <div className="self-center">
                    มอบหมายแล้ว
                </div>
            </div>
        </div>
        );
    };
    export default AsmCard;