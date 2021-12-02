import React, { useState, useEffect, useCallback } from 'react';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from './ButtonGroup';
import { TFgroup } from './TFgroup';

function QuizSubj({index}){
    const [selected, setSelected] = useState("first");

    return(
        <div className="box shadow-lg p-7">
            
            <h4>Questions {index+1} :</h4>
            <textarea className="min-w-full	 input-questions text-lg" placeholder="คำถาม...">
            </textarea>             
        </div>
    )
}
export default QuizSubj;