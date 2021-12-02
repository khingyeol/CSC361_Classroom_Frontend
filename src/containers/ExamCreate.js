import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';
import {Link, useParams} from 'react-router-dom'
import { ButtonGroup } from '../components/Exam/ButtonGroup';
import CreateContent from '../components/Exam/CreateContent';
import CreateEach from '../components/Exam/CreateEach';


function ExamCreate(){
  const { classid } = useParams();
  const [status, setStatus] = useState('1')

  const [content, setContent] = useState([])

  useEffect(() => {
  }, []);

  const [p1a, setp1a] = useState([])
  const [p2a, setp2a] = useState([])


    const FeedPostList = content.map((item) =>
    <>
      <CreateEach p1amount={p1a} p2amount={p2a} />
      </>
    )
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

      const p1arr = []
      for (let i = 0; i<Number(p1amount) ; i++) {
        const itemObjSchema = {
          question: '',
          type: '',
          image: '',
          choice: [],
          answer: [],
          score: ''
        }
       p1arr.push(itemObjSchema)
      }

      const p2arr = []
      for (let i = 0; i<Number(p2amount); i++) {
        const itemSubjSchema = {
          question: '',
          type: '',
          image: '',
          score: ''
        }
       p2arr.push(itemSubjSchema)
      }

      setp1a(p1arr)
      setp2a(p2arr)

      examSchema.class_code = classid
      examSchema.exam.part_list = data
      examSchema.exam.exam_name = examName
      examSchema.exam.exam_start_date = data[0].start_date
      examSchema.exam.exam_end_date = data[0].end_date

      console.log(examName+p1amount+p2amount)
      console.log('EXAM',examSchema);
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
      setContent([examSchema])
      setStatus('2')
      }, []);

    return (
    <React.Fragment>
      {console.log(status)}
      <div className="container box py-12 px-6 mx-auto" id="">
        {
          status == '1' ? <CreateContent onClick={handleClick} /> :
          status == '2' ? 
          <div>
          {FeedPostList}
          {/* <CreateEach /> */}
          </div> : ''
        }
      </div>


    </React.Fragment>

    )
}
export default ExamCreate;