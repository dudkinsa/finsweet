import React from 'react';
import './blog.scss';
import Header from './components/Header/Header';
import Recent from './components/Recent/Recent';
import AllPosts from './components/AllPosts/AllPosts';

const Blog = () => {
  return (
    <>
    <Header />
    <Recent />
    <AllPosts />
    </>
  )
}

export default Blog;