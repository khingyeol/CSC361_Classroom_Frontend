import {useState} from 'react';
import axios from 'axios';
import { uploadFile } from '../../services/actions/api_file';
// import './style.css';

export const FileUploader = ({onSuccess,button}) => {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('nOK');
    console.log('file check', files)

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        const res = await uploadFile(data)
        // status = res.data.result
        // console.log('status here',status)

        if(res.data.result == 'OK'){
            onSuccess(res.data.data,res.data.result)
            setStatus(res.data.result)
            // console.log('1 upload',res.data.message)
            // console.log('2 file id',res.data.data)
            // savedFiles(res.data.data)
            // button = 'unsubmit'
        }else{
            console.log('upload',res.data.message)
        }

        // axios.post('//localhost:8000/upload', data)
        //     .then((response) => {
        //         console.log('Upload Success')
        //         // toast.success('Upload Success');
        //         onSuccess(response.data)
        //     })
        //     .catch((e) => {
        //         console.log('Upload Error')
        //         // toast.error('Upload Error')
        //     })
    };

    return (
        <form className="grid justify-items-stretch" method="post" action="#" id="#" 
        onSubmit={onSubmit}>

            <div className="form-group files " >
                {/* <label>Upload Your File </label> */}
                <input type="file"
                       onChange={onInputChange}
                       className="form-control "
                       multiple
                       />
                       
            </div>
        {/* { !files.length == 0 ?
            <button className="mx-2 h-8 bg-green rounded-md text-white font-bold text-lg">{button}</button>
            : status == 'OK' ? <button disabled className="mx-2 h-8 bg-green rounded-md text-white font-bold text-lg">Unsubmit</button>
            : ''
        } */}

        {/* {
            status == 'nOK' ? '' :
            status == 'OK' ? 
        } */}

        {
            status == 'OK' ? console.log('status OK')
            : !files.length == 0 ?
            <button className="mx-2 h-8 bg-green rounded-md text-white font-bold text-lg">{button}</button>
            : ''
        }
        </form>
    )
};