import React from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import PostBox from '../components/Class/PostBox';
import FeedPost from '../components/Class/FeedPost';

function ClassContent(){
    return(
      <React.Fragment>
          <div className="">
          <PostBox />
        <FeedPost />
        </div>
  </React.Fragment>
)
}

export default ClassContent;