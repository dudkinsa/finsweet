import React from 'react';
import styles from './blogInner.module.scss';
import Header from './components/Header/Header';
import BlogPost from './components/BlogPost/BlogPost';

const BlogInner = () => {
  return (
    <>
    <Header />
    <BlogPost />
    </>
  );
};

export default BlogInner;
