import React, { useState, useEffect, PropTypes, useCallback } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import QuizObj from './QuizObj';
import QuizSubj from './QuizSubj';
import { createExam } from '../../services/actions/api_exam';

const CreateEach = ({p1amount,p2amount,examSchema}) => {
console.log('propsssss',examSchema)

    const handleClick = useCallback((item,index) =>{

        p1amount[index] = item
        console.log('p1 index',p1amount)
    })

    const handleClick2 = useCallback((item,index) =>{
        p2amount[index] = item
        console.log('p2 index',p2amount)
    })

    const onSubmit = async (e) => {
        examSchema[0].exam.part_list[0].item = p1amount

        if (p2amount.length > 0){
            examSchema[0].exam.part_list[1].item = p2amount
        }
        console.log('On Submit Exam Schema',examSchema)

        const res = await createExam(examSchema[0])

        if(res.data.result == 'OK'){
            window.location.reload();
            console.log('result',res.data.result)
        }else{
            console.log(res.data.result)
        }



    }

    const loopObj = p1amount.map((item,index) =>
    <div>
        {
            examSchema[0].exam.part_list[0].type == "objective" ?
            <QuizObj index={index} item={item} onClick={handleClick} />
            : <QuizSubj index={index} item={item} onClick={handleClick2} />
        }
    </div>
    )

    const loopSubj = p2amount.map((item,index) =>
    <div>
        {
            examSchema[0].exam.part_list[1].type == "objective" ?
            <QuizObj index={index} item={item} onClick={handleClick} />
            : examSchema[0].exam.part_list[1].type == "subjective" ?
            <QuizSubj index={index} item={item} onClick={handleClick2} />
            : ''
        }
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
             {loopObj}
        <div className="space-y-3">
            {/* {count} */}
        </div>
        {
            p2amount.length > 0 ? <h2>Part 2</h2> : ''
        }
        
        <div>
        {loopSubj}
        </div>


        <button className="btn my-6 mx-3 px-5" onClick={onSubmit}>Create</button>

    </div>

    );
};
export default CreateEach;