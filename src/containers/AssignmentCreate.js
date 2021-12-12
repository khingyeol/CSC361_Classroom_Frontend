import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import {Link, useParams} from 'react-router-dom'
import { assignmentCreate } from '../services/actions/api_class';
import AsmCreateContent from '../components/Assignments/AsmCreateContent';


function AssignmentCreate(){

  const { classid } = useParams();

  const [content, setContent] = useState([])

  useEffect(() => {
  }, []);

    const asmSchema = {
        class_code: classid,
        data: {
            assignment_name: '',
            assignment_description: '',
            turnin_late: true,
            score: 0,
            assignment_optional_file: [],
            assignment_end_date: ''
        }        
    }

    const handleClick =  useCallback(async (data) => {
        
        asmSchema.data.assignment_name = data[0].assignment_name
        asmSchema.data.assignment_description = data[0].assignment_description
        asmSchema.data.turnin_late = data[0].turnin_late
        asmSchema.data.score = data[0].score
        asmSchema.data.assignment_optional_file = data[0].assignment_optional_file
        asmSchema.data.assignment_end_date = data[0].assignment_end_date
        
        const res = await assignmentCreate(asmSchema);
        if(res.data.result == 'OK') {
            window.location.reload()
        }
        else {
            console.log('submit error');
        }
    //   setContent()
      }, []);

    return (
    <React.Fragment>
      <div className="container box py-12 px-6 mx-auto" id="">
         <AsmCreateContent onClick={handleClick} />
      </div>


    </React.Fragment>

    )
}
export default AssignmentCreate;