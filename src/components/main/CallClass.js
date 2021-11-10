import React, { useState } from "react";
// import axios from 'axios'
import '../../index.css'

function CallClass(){
    const content = useState([])

    const classlist = content.map(() =>
        <div class="class-list">
            ei
            <div class="sub">B01</div>
        </div>
        
    ) 
    return classlist
}

export default CallClass