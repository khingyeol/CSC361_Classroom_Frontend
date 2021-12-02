import React, { useState, useEffect, PropTypes, useCallback } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import QuizObj from './QuizObj';
import QuizSubj from './QuizSubj';
const CreateEach = ({p1amount,p2amount}) => {
console.log('propsssss',p1amount+''+p2amount)

    const handleClick = useCallback((item,index) =>{
        console.log('receive',item)

        p1amount[index] = item
        console.log('p1 index',index+' '+item)
    })

    const loopObj = p1amount.map((item,index) =>
    <div>
        <QuizObj index={index} item={item} onClick={handleClick} />
    </div>
    )

    const loopSubj = p2amount.map((item,index) =>
    <div>
        <QuizSubj index={index} />
    </div>
    )

    // const [exam, setExam] = useState([])
    // setExam(examSchema)
    // console.log('EXAM',exam)
    // const count = examSchema.map((item) =>
    //     <QuizObj />
    // )

    return (
    <div className="space-y-5">
        <h1>ชื่อการสอบ :</h1><h2>Part 1</h2>
        {loopObj}
        <div className="space-y-3">
            {/* {count} */}
        </div>

        <h2>Part 2</h2>
        
        <div>
        {loopSubj}
        </div>


        <button className="btn my-6 mx-3 px-5">Create</button>

    </div>

    );
};
export default CreateEach;