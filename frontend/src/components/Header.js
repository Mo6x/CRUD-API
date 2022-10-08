import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
    const [activeTab, setActiveTab] =  useState("Home");
    return (
        <div className='header'>
            <p className='logo'>User Management System</p>
            <div className='header-right'>
                <Link to='/'>
                    <p className={`${activeTab === "Home" ? "active" : " "}`} onClick={() => setActiveTab("Home")}>Home</p>
                </Link>
                <Link to='/add'>
                    <p className={`${activeTab === "AddUser" ? "active" : " "}`} onClick={() => setActiveTab("AddUser")}>Add User</p>
                </Link>
                <Link to='/about'>
                    <p className={`${activeTab === "About" ? "active" : " "}`} onClick={() => setActiveTab("About")}>About</p>
                </Link>
            </div>
        </div>
    );
};

export default Header