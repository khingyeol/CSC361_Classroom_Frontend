import React, { useState ,useEffect } from 'react';
import { getAllClass } from '../../services/actions/api_class'
import '../../index.css'

const ClassCard = () => {
  const [content, setContent] = useState([])

  useEffect( async () => {
    const res = await getAllClass();
    console.log(res.data.data)
    if(res.data.result = 'OK'){
      setContent(res.data.data)
    }else{
      setContent([])
    }
  }, []);


  const card = content.map((item) =>
  <main>
  <div className="">
    <div class="relative box shadow-md rounded-md overflow-hidden" style={{width: '340px',height: '200px'}}>
      <div className=''>
        <div className='absolute p-5 truncate'>
          <h2 className=""> {item.class_name} </h2>
          <label className="text-grey">{item.class_section}</label>
        </div>
      <img
        src="https://img.freepik.com/free-vector/christmas-holiday-golden-pattern-background-template-greeting-card-design_206636-74.jpg?size=626&ext=jpg"
        className="object-cover w-full "
        style={{height: '85px'}}
        alt=""
      />
    </div>
    
      <div class="absolute bottom-0 right-0 p-5  ">
      <div className='flex  space-x-2 '>
        <label className='text-grey'>{item.teacher.name.firstname+' '+item.teacher.name.lastname} </label>
        <img src={item.teacher.profile_pic}
        className='h-6 w-6 object-cover rounded-full ' />
        </div>
      </div>
    </div>
  </div>
  </main>
  )

return card
}

export default ClassCard;