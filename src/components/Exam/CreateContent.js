import React, { useState, useEffect, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'
import {useParams} from 'react-router-dom'
import { ButtonGroup } from './ButtonGroup';

const CreateContent = ({onClick}) => {
    const [selected, setSelected] = useState("first");
    const [two, setTwo] = useState("first");
    const [moreInfo, set1amount] = useState({});

    const [inpObj ,setObj] = useState({
        part_id: '',
        type: '',
        part_name: '',
        part_description: '',
        start_date: '',
        end_date: '',
        score: '',
        item: ''
    })
    const [inSubj, setSubj] = useState({
        part_id: '',
        type: '',
        part_name: '',
        part_description: '',
        start_date: '',
        end_date: '',
        score: '',
        item: ''
    })

    const [input, setInput] = useState({
        part_id: '',
        type: '',
        part_name: '',
        part_description: '',
        start_date: '',
        end_date: '',
        score: '',
        item: ''
    })

    const handleSubj = (e) => {
        const subj={...inSubj}
        subj[e.target.id]=e.target.value
        setSubj(subj)

    }

    const handleChange = (e) => {
        const obj={...inpObj}
        obj[e.target.id]=e.target.value
        setObj(obj)
        
    }

    const another = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        set1amount(values => ({...values, [id]: value}))
    }

    const ontapped = () => {
        console.log('Obj',input)
        const final_arr = []
        //if เลือกข้อกา part แรก
        //if 
        const partArr = {
            part_id: '1',
            type: (selected == 'first' ? 'objective' : 'subjective' ),
            part_name: (selected == 'first' ? 'ปรนัย (ข้อกา)' : 'อัตนัย (ข้อเขียน)' ),
            part_description: inpObj.part_description,
            start_date: inpObj.start_date,
            end_date: inpObj.end_date,
            score: inpObj.score,
            item: ''
        }
        final_arr.push(partArr)
        if (two != 'first'){
            const partArrTwo = {
                part_id: '2',
                type: (two == 'second' ? 'objective' : 'subjective' ),
                part_name: (two == 'second' ? 'ปรนัย (ข้อกา)' : 'อัตนัย (ข้อเขียน)' ),
                part_description: inpObj.part_description,
                start_date: inpObj.start_date,
                end_date: inpObj.end_date,
                score: inSubj.score,
                item: ''
            }
            final_arr.push(partArrTwo)
            console.log('eiei',partArrTwo)
        }

        onClick(final_arr,moreInfo.name,moreInfo.one,moreInfo.two)
      }

    return (
        <div className="">
        <div>
            <h2 className="border-b pb-3 my-5">Create Exam</h2>

            <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <b>ชื่อการสอบ : </b>
                <input className="exam-tf bg-white w-94" rows="4" cols="50"
                id="name"
                value={moreInfo.name} onChange={another}
                ></input>
                </div>

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
                    <input className="exam-tf bg-white w-12 h-11 "
                     id="one"
                    value={moreInfo.one} onChange={another}
                    ></input>
                </div>
                <div>
                    <b>คะแนนรวม : </b>
                    <input className="exam-tf bg-white w-14	h-11"
                    id="score"
                    onChange={handleChange}
                    ></input>
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
                    <input className="exam-tf bg-white w-12	h-11"
                    id="two"
                    value={moreInfo.two} onChange={another}
                     
                    ></input>
                </div>
                <div>
                    <b>คะแนนรวม : </b>
                    <input className="exam-tf bg-white w-14	h-11"
                    id="score"
                    onChange={handleSubj}
                    ></input>
                </div>
                </div>

                <div className="flex items-center space-x-3">
                <b>คำอธิบาย : </b>
                <textarea className="exam-tf bg-white w-94" rows="4" cols="50"
                id="part_description"
                onChange={handleChange}
                ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                <b>วัน-เวลาเริ่มสอบ </b>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime"
                id="start_date"
                onChange={handleChange}
                 />
                
                <b>วัน-เวลาจบ</b>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime"
                id="end_date"
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
export default CreateContent;