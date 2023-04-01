import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='navbar shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
            <div className='d-flex justify-content-between mt-2 container'>
                <h1 className='fw-bold '>Knowledge Cafe</h1>
                <img className='nav-img' src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
            </div>
            <hr />
        </div>
    );
};

export default Header;