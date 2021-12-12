import React, { useState, useEffect, PropTypes, useCallback } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import QuizObj from './QuizObj';
import QuizSubj from './QuizSubj';
import { createExam } from '../../../services/actions/api_exam';

const stdCreateEach = ({p1amount,p2amount,examSchema}) => {
console.log('propsssss',examSchema)

    const loopObj = p1amount.map((item,index) =>
    <div>
        {
            examSchema[0].exam.part_list[0].type == "objective" ?
            <QuizObj index={index} item={item} />
            : <QuizSubj index={index} item={item} />
        }
    </div>
    )

    const loopSubj = p2amount.map((item,index) =>
    <div>
        {
            examSchema[0].exam.part_list[1].type == "objective" ?
            <QuizObj index={index} item={item} />
            : examSchema[0].exam.part_list[1].type == "subjective" ?
            <QuizSubj index={index} item={item}  />
            : ''
        }
    </div>
    )

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


        <button className="btn my-6 mx-3 px-5">Create</button>

    </div>

    );
};
export default stdCreateEach;