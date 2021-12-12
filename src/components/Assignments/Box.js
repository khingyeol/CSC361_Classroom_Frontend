import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { FileUploader } from './FileUploader';
import { Preview } from './Preview';
import { assignmentGet,assignmentStdSubmit } from '../../services/actions/api_class';

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
    const [files, setFiles] = useState([])
    const [result, setResult] = useState([])

    useEffect( async () => {
        const res = await assignmentGet(inputs);
        console.log('asm content',res.data.data)

        if(res.data.result == 'OK'){
            setContent(res.data.data)
            if (res.data.data[0].role == 'student') {
                setResult(res.data.data[0].submit_result.file_result)
            }
            else {
                //teacher
                //set for teacher
            }
                }else{
            setContent([])
            setResult([])
        }
    }, []);


    const onSuccess = useCallback( async (savedFiles,status) => {
        // setFiles(savedFiles)
        // console.log('3 saved',savedFiles)
        // console.log('4 status',status)
        const fileName_arr = []
        const fileId_arr = []
        if (status == 'OK') {
            if(savedFiles.length > 0) {
                for (let i = 0; i < savedFiles[0].file_name.length ; i++) {
                    fileName_arr.push(savedFiles[0].file_name[i])
                    fileId_arr.push(savedFiles[0].id[i])
                }
            }
            const reqBody = {
                class_code: inputs.class_code,
                assignment_id: inputs.assignment_id,
                data: {
                    file_result: fileId_arr,
                    answer: ''
                }
            }
            const res = await assignmentStdSubmit(reqBody);
            if(res.data.result == 'OK') {
                window.location.reload()
            }
            else {
                console.log('submit error');
            }
        }
        
        
        setFiles(fileName_arr)
        //เรียก api ส่งการบ้าน โยน data
        //เอา onsuccess ไปทำไาสักอย่างเพื่อที่จะ show componentปุ่ม/refresh
        // ส่งค่า submit กลับไป ถ้า onsuccess กลับมาแล้วเปลี่ยนค่าเปน unsubmit + disable upload
    }, []);
  
    const card = content.map((item) => 
        
        <div className="box px-5 divide-y divide-grey divide-opacity-10 py-5" >
        <div className="object-none">
        <div className="mx-2 flex justify-between">
                <h4>Due date : {item.assignment_end_date.split('T')[0]}</h4>
                {/* <h4 className="text-green">{item.score} pts</h4> */}
                <h4 className="ml-10 text-green">{item.status}</h4>
            </div>
            { item.can_submit && <FileUploader onSuccess={onSuccess} 
            button={'Submit'}/>}
            { !item.can_submit && 
                // console.log(item.submit_result.file_result)
                result.map((file,index) => 
                 <div key={index} className="flex space-x-3 py-3">
                    <div className="flex-none rounded-full bg-green bg-opacity-10 h-9 w-9">
                    <a href={file.file_path}><img src='http://127.0.0.1:8080/public/img/1638125882758-Asset 5@1.png' 
                    className="rounded-full bg-green bg-opacity-10 mr-3 object-cover rounded-full">
                                </img></a>

                    </div>
                    <div className="flex-auto overflow-hidden self-center">
                            <p className="truncate text-sm">{file.file_name}</p>
                    </div>
                </div>
                )
            }
            <Preview files={files}/>
            
        </div>
    </div>

    )

    return (
        card
    );
}
export default Box;