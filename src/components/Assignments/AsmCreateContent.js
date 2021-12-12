import React, { useState, useEffect, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'
import {useParams} from 'react-router-dom'
import { ButtonGroup } from '../Exam/ButtonGroup';

const AsmCreateContent = ({onClick}) => {
    const [selected, setSelected] = useState("true");
    const [asmName, setAsmName] = useState('');

    const [input, setInput] = useState({
        assignment_name: '',
        assignment_description: '',
        turnin_late: '',
        score: '',
        assignment_optional_file: [],
        assignment_end_date: ''
    })

    const handleChange = (e) => {
        const obj={...input}
        obj[e.target.id]=e.target.value
        setInput(obj)
        
    }

    const another = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setAsmName(values => ({...values, [id]: value}))
    }


    const ontapped = () => {
        var turnin_late = true
        if (selected == 'false') {
            turnin_late = false
        }
        const asmSchema = {
            assignment_name: asmName.assignment_name,
            assignment_description: input.assignment_description,
            turnin_late: turnin_late,
            score: Number(input.score),
            assignment_optional_file: [],
            assignment_end_date: input.assignment_end_date
        }
        onClick([asmSchema])
      }

    return (
        <div className="">
        <div>
            <h2 className="border-b pb-3 my-5">Create Assignment</h2>

            <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <b>ชื่อ assignment : </b>
                <input className="exam-tf bg-white w-94" rows="4" cols="50"
                id="assignment_name"
                value={asmName.assignment_name} onChange={another}
                ></input>
                </div>

                <div className="flex items-center space-x-3">
                <h4 className="text-green"> นักเรียนสามารถส่งช้า : </h4>
                <div className="flex space-x-2">
                <ButtonGroup
                          value="true"
                          selected={selected}
                          text="ได้"
                          onChange={setSelected}                
                />
                <ButtonGroup
                          value="false"
                          selected={selected}
                          text="ไม่ได้"
                          onChange={setSelected}                
                />

                </div>
                <div>
                    <b>คะแนน : </b>
                    <input className="exam-tf bg-white w-14	h-11"
                    id="score"
                    onChange={handleChange}
                    ></input>
                </div>


                </div>

                <div className="flex items-center space-x-3">
                <b>คำอธิบาย : </b>
                <textarea className="exam-tf bg-white w-94" rows="4" cols="50"
                id="assignment_description"
                onChange={handleChange}
                ></textarea>
                </div>
                <div className="flex items-center space-x-3">
                
                <b>วัน-เวลาจบ</b>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime"
                id="assignment_end_date"
                onChange={handleChange}
                 />
                </div>

            </div>
        </div>

        <Link to="/"> <button className="btn-border my-6 mx-3 px-5 ">Cancel</button> </Link>
        <button className="btn my-6 mx-3 px-5" onClick={ontapped}>Create</button>
        </div>
    );
};
export default AsmCreateContent;