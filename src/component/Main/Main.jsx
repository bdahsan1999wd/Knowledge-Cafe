import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import SideBar from '../SideBar/SideBar';
 
const Main = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='row'>
            <div className='blog-container col-md-8'>
                <BlogCard></BlogCard>
            </div>
            <div className='bookmark-container col-md-4'>
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default Main;