import React, { useState } from "react";
import {useParams} from 'react-router-dom'
import { FileUploader } from "./FileUploader";
import { Preview } from "./Preview";

function Testfile(){
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
      setFiles(savedFiles)
  };

    return (
      <div className="container box py-12 px-6 mx-auto" id="">
        <div className="App">
          <FileUploader onSuccess={onSuccess}/>
          <Preview files={files}/>
          {/* <ToastContainer/> */}
        </div>
      </div>

      
        );
  }
export default Testfile;