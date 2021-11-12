import React, { useState, useEffect } from "react";
import { getAllClass } from '../../services/actions/api_class'
// import axios from 'axios'
import '../../index.css'

function CallClass(){
    const [content, setContent] = useState([])


    useEffect( async () => {

            const res = await getAllClass();
            console.log(res)
            if (res.data.result = 'OK') {
                setContent(res.data.data)
            }
            else {
                setContent([])
            }    

        
    }, []);

    const classlist = content.map((item) =>
        <div key="{item.class_code}" className="class-list">
            { item.class_name}
            <div className="sub">{ item.class_section}</div>
        </div>
        
    ) 
    return classlist
}

export default CallClass