import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from '../components/Exam/ButtonGroup';
import CreateContent from '../components/Exam/CreateContent';



function ExamCreate(){
  const { classid } = useParams();
  const [status, setStatus] = useState('1')

  //เมื่อใดก็ตามที่เขียน react จะไม่ใช้พวกนี้แล้วไอเวร
  // const [examInfo, setExamInfo] = useState({
  //     exam_name: '',
  //     part_list: [],
  //     exam_start_date: '',
  //     exam_end_date: '',
  // })
  //   const [examCreated, setExam] = useState({
  //     class_code: '',
  //     exam : {
  //       exam_name: '',
  //       part_list: [],
  //       exam_start_date: '',
  //       exam_end_date: '',
  //     }
  //   })
    //ข้างบนเรียกว่าเอาความรู้รอไปทำงานจริงแล้วที่ทำงานใช้ react ไปถามเขาจะได้ทำเป็น

    //ใช้นี่ซะ อันปกติก็มีไม่ยอมใช้ไอโจ้
    const examSchema = {
      class_code: classid,
      exam: {
        exam_name: '',
        part_list: [],
        exam_start_date: '',
        exam_end_date: ''
      }
    }


    const handleClick =  useCallback((data,examName,p1amount,p2amount) => {
      //set ค่า examCreated เอา onClickที่เปน [] มาใส่
      console.log('check',data)
      examSchema.class_code = classid
      examSchema.exam.part_list = data
      console.log(examName+p1amount+p2amount)
      console.log('EXAM SCHEMAAAAAAAAAAAAAAAAAAAAAAAA',examSchema);
        // setExam({
        //   class_code: classid,
        //   exam: {
        //     exam_name: '',
        //     part_list: onClick,
        //     exam_start_date: '',
        //     exam_end_date: '',
        //   }    
        // })

        //setExamInfo({...examInfo, part_list : data})
        //setExam({...examCreated, class_code : classid})

        //console.log('onClick',examInfo)
        //console.log('exam created',examCreated);
      setStatus('2')
      }, []);

    return (
    <React.Fragment>

      <div className="container box py-12 px-6 mx-auto" id="">
        {
          status == '1' ? <CreateContent onClick={handleClick} /> :
          status == '2' ? <div>Exam Created!! </div> : ''
        }
      </div>


    </React.Fragment>

    )
}
export default ExamCreate;