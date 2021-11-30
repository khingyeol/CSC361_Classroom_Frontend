import React, { useState, useEffect, PropTypes } from 'react';
        import { Link } from 'react-router-dom';
import '../../index.css'
import {useParams} from 'react-router-dom'
import { ButtonGroup } from './ButtonGroup';

const CreateContent = ({onClick}) => {
    const [two, setTwo] = useState("first");
    const [selected, setSelected] = useState("first");
    const ontapped = (e) => {
        console.log('select',selected+two)
        // this.props.parentCallback(selected+' & '+two);
        e.preventDefault();
      }

    return (
        <div className="">
        <div>
            <h2 className="border-b pb-3 my-5">Create Exam</h2>

            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                <h4 className="text-green"> Part 1 : </h4>
                <div className="flex space-x-2">
                <ButtonGroup
                          value="first"
                          selected={selected}
                          text="ข้อกา"
                          onChange={setSelected}                
                />
                <ButtonGroup
                          value="second"
                          selected={selected}
                          text="ข้อเขียน"
                          onChange={setSelected}                
                />

                </div>

                <div>
                    <b>จำนวนข้อ : </b>
                    <input className="exam-tf bg-white w-12 h-11 " disabled='true' id=""></input>
                </div>
                <div>
                    <b>คะแนนรวม : </b>
                    <input className="exam-tf bg-white w-14	h-11"></input>
                </div>

                </div>

                <div className="flex items-center space-x-3">
                <h4 className="text-green"> Part 2 : </h4>
                <div className="flex space-x-2">
                <ButtonGroup
                          value="first"
                          selected={two}
                          text="ไม่มี"
                          onChange={setTwo}                
                />
                 <ButtonGroup
                          value="second"
                          selected={two}
                          text="ข้อกา"
                          onChange={setTwo}                
                />
                 <ButtonGroup
                          value="third"
                          selected={two}
                          text="ข้อเขียน"
                          onChange={setTwo}                
                />

                </div>
                <div>
                    <b>จำนวนข้อ : </b>
                    <input className="exam-tf bg-white w-12	h-11"></input>
                </div>
                <div>
                    <b>คะแนนรวม : </b>
                    <input className="exam-tf bg-white w-14	h-11"></input>
                </div>
                </div>

                <div className="flex items-center space-x-3">
                <b>คำอธิบาย : </b>
                <textarea className="exam-tf bg-white w-94" rows="4" cols="50"></textarea>
                </div>

                <div className="flex items-center space-x-3">
                <b>วัน-เวลาเริ่มสอบ </b>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                
                <b>วัน-เวลาจบ</b>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
                </div>

            </div>
        </div>

        <Link to="/"> <button className="btn-border my-6 mx-3 px-5 " onClick={ontapped}>Cancel</button> </Link>
        <button className="btn my-6 mx-3 px-5" onClick={onClick,ontapped}>Create</button>
        </div>
    );
};
export default CreateContent;