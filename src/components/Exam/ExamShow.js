import React, { useState ,useEffect } from 'react';
import { useParams, Link} from 'react-router-dom'
import { getExam } from '../../services/actions/api_exam';
import { jwtAuth } from '../../services/actions/api_auth';
import stdCreateEach from './Student/stdCreateEach';
import QuizObj from './Student/QuizObj';
import QuizSubj from './Student/QuizSubj';
import { examStdSubmit } from '../../services/actions/api_exam';

const ExamShow = () => {

    const { classid, examid } = useParams();
    
    const [content, setContent] = useState([])
    const [role, setRole] = useState('')
    const [valid, setValid] = useState('FAIL')
    const [setting, setSetting] = useState([])
    const answerArr = []

    useEffect( async () => {
        const resJwt = await jwtAuth();
        var roleInFunc = ''
        resJwt.data[0].class.map(item => {
    
          if (item.class_code === classid) {
            setRole(item.role)
            roleInFunc = item.role
          }
        });

      const reqBody = {
          class_code: classid,
          exam_id: examid
      }
      const res = await getExam(reqBody)


      if(res.valid == 'YES' || res.valid == 'NO'){
        setContent(res.data)
        console.log('CONTENT',res.data);
        setValid(res.valid)
        if (roleInFunc == 'teacher') {
            setSetting(res.data[0].optional_setting)
            console.log('SETTING',res.data[0].optional_setting)
        }
        else {
            setSetting([])
        }
        console.log('kkkkk',res.data[0])
        for (let i = 0; i<res.data[0].part_list[0].item.length;i++){
            answerArr.push([''])
        }
        console.log('answer',answerArr)
    }
      else{
        setContent([])
        setSetting([])
        setValid(res.valid)
      }
  
    }, []);

    const settingCard = setting.map((item,idex) => 
        <div className="self-center">
            <p className="text-grey color-grey">Random Question : {String(item.random_question)}</p>
            <p className="text-grey color-grey">Random Choice : {String(item.random_choice)}</p>
            <p className="text-grey color-grey">Student can see result : {String(item.std_getResult)}</p>
        </div>
    )

    const card = content.map((item,index) => 
    <div className="" key={index} id="middle">
        <div className="box post p-5 ">
            <div className="flex justify-between ">
                <div className="flex flex-wrap content-center py-2">
                    <img src={'http://127.0.0.1:8080/public/img/1638125882758-Asset 5@1.png'} className="rounded-full bg-green bg-opacity-10 h-14 w-14 mr-3 object-cover rounded-full">
                    </img>
                    
                    <div className="self-center">
                        <h4 className="text-green">
                            {console.log(item)}
                            <label className="">{item.exam_name}</label> 
                            </h4>
                        <p className="text-grey color-grey">Start Date :{item.exam_start_date}</p>
                        <span className="text-grey color-grey">End Date :{item.exam_end_date}</span>
                    </div>
                </div>

                {/* <div className="text-black">
                    <b>{item.score} pts.</b>
                </div> */}
            </div>
                <div className="self-center border-t border-grey">
                    <p className="break-words whitespace-pre-line py-3">{item.exam_description}</p>
                    <p className="whitespace-pre-line py-3">Optional Settings</p>
                    {settingCard}
                </div>
        </div>
        </div>
    )

    const [submitschema,setSubmit] = useState([])



    const studentPostList = content.map((item) =>
    <>
    {item.part_list[0].item.map((item,index) => 
    <>
       <QuizObj question={item.question} 
       index={index}
       ch1={item.choice[0]} 
       ch2={item.choice[1]} 
       ch3={item.choice[2]} 
       ch4={item.choice[3]} 
        answerarr={answerArr}
       />
    </>
    ) 
    }

    <div>ee</div>

    </>
    )

    const onTapped = async (e) => {
        console.log('clicked')
        e.preventDefault();

        const reqbody = {
            class_code: classid,
            exam_id: examid,
            data: [{
                part_id: '1',
                part_type: 'subjective',
                answer: answerArr
                 }]        
        }
            

        const res = await examStdSubmit(reqbody)
        if(res.data.result == 'OK'){
            console.log(res.data);
            window.location.reload();
        }else{
            console.log(res.data)
        }
    }

    if(role == 'teacher'){
        return(
            card
        )
    }
    else if (role == 'student') {
        if (valid == 'NO') {
            return(
                <div className="container box py-12 px-6 mx-auto" id="">
                {content[0]}
                </div>
            )
        }
        else {
            return(
                <div className="container box py-12 px-6 mx-auto" id="">
                {studentPostList}
                <button className="btn p-3 px-7 shadow-lg" 
                onClick={onTapped}
                >Submit</button>

                </div>
            )
        }
    }
    else {
        return(
            <div></div>
        )
    }

   
}
export default ExamShow;