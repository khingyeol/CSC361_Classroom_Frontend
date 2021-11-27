import React, { useState ,useEffect } from 'react';
// import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'

const TodoBox = () => {

    return (
                <div className="flex space-x-3 py-3">
                    <div className="flex-none rounded-full bg-green bg-opacity-10 h-9 w-9">

                    </div>
                    <div className="flex-auto overflow-hidden self-center">
                            <p className="truncate text-sm">⚠️ ส่งงาน Network Finalkaakd Lossssssemasd</p>
                    </div>
                    <div className="flex-none self-center">
                        <span className="text-green">12 ธ.ค.</span>
                    </div>
                </div>
                
        );
    };
    export default TodoBox;