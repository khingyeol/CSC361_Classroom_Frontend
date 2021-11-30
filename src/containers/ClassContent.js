import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import PostBox from '../components/Class/PostBox';
import FeedPost from '../components/Class/FeedPost';
import { getfromClass } from '../services/actions/api_class';

function ClassContent(){

  const { classid } = useParams();
  const [content, setContent] = useState([])

  useEffect( async () => {
    const res = await getfromClass(classid);

    if(res.data.result == 'OK'){
      setContent(res.data.data)
    }else{
      setContent([])
    }
  }, []);


    const FeedPostList = content.map((item) =>
      <FeedPost data={item.class_feed} />
    )

    return(
      <React.Fragment>
          <div className="">
          <PostBox />
          {FeedPostList}
        </div>
  </React.Fragment>
)
}

export default ClassContent;