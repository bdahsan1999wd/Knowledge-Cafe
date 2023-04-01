import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './BlogCard.css'
const BlogCard = (props) => {
    const { readTime, blogTitle, coverImg, authorName, authorImg, publishDate } = props.blog
    return (
        <div className='blog mx-auto'>
            <img src={coverImg} alt="cover Image" />
            <div className='d-flex justify-content-between'>
                <div className='details d-flex ps-2 mt-4'>
                    <img className='author rounded-circle' src={authorImg} alt="author image" />
                    <h5 className='ps-2 fw-bold'>{authorName} <br /> {publishDate}</h5>
                </div>
                <div className='mt-4 pe-3'>
                    <p className='fw-bold'>{readTime} min read <a onClick={() => addToBlog} href=''><FontAwesomeIcon icon={faBookmark} /> </a></p>
                </div>
            </div>
            <h2 className='mt-4 ps-4'>{blogTitle}</h2>
            <p className='mt-4 ms-4 fw-bold'>#Beginners #Programmer</p>
            <a className='mt-4 ms-4' href="">Mark as read</a>
        </div>
    );
};

export default BlogCard;