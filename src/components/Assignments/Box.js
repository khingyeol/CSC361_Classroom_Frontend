import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { FileUploader } from './FileUploader';
import { Preview } from './Preview';
import { assignmentGet } from '../../services/actions/api_class';

//ดึง api ส่งการบ้านในนี้

function Box(){
    const { classid } = useParams();
    const { id } = useParams();

    // const [files, setFiles] = useState([]);
    const [content, setContent] = useState([])
    const [inputs, setInputs] = useState({
        class_code: classid,
        assignment_id: id
    })

    useEffect( async () => {
        const res = await assignmentGet(inputs);
        console.log('asm content',res.data.data)

        if(res.data.result == 'OK'){
            setContent(res.data.data)
        }else{
            setContent([])
        }
    }, []);


    const onSuccess = useCallback((savedFiles,status) => {
        // setFiles(savedFiles)
        console.log('3 saved',savedFiles)
        console.log('4 status',status)
        //เรียก api ส่งการบ้าน โยน data
        //เอา onsuccess ไปทำไาสักอย่างเพื่อที่จะ show componentปุ่ม/refresh
        // ส่งค่า submit กลับไป ถ้า onsuccess กลับมาแล้วเปลี่ยนค่าเปน unsubmit + disable upload
    }, []);
  
    const card = content.map((item) => 
        <div className="box px-5 divide-y divide-grey divide-opacity-10 py-5" >
        <div className="object-none">
        <div className="mx-2 flex justify-between">
                <h4>Due date : </h4>
                <h4 className="text-green">{item.score} pts</h4>
            </div>
            <FileUploader onSuccess={onSuccess} 
            button={'Submit'}/>
            {/* <Preview files={files}/> */}
            
        </div>
    </div>

    )

    return (
        card
    );
}
export default Box;