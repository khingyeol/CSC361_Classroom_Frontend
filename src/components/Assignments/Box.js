import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Box(){
    const { classid } = useParams();
    const { id } = useParams();

    return (
            <div className="box px-5 divide-y divide-grey divide-opacity-10 overflow-auto" style={{width: '340px',height: '200px'}}>
            </div>

    );
}
export default Box;