import React, { useState } from "react";
// import axios from 'axios'
import '../../index.css'

function CallClass(){
    const content = useState([])

    const classlist = content.map(() =>
        <div className="class-list">
            ei
            <div className="sub">B01</div>
        </div>
        
    ) 
    return classlist
}

export default CallClass