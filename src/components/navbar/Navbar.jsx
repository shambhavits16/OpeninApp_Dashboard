import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.scss'

export const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let pageTitle = '';

  if (pathname === '/') {
    pageTitle = 'Dashboard';
  } else if (pathname === '/users') {
    pageTitle = 'Users';
  } else if (pathname === '/transactions') {
    pageTitle = 'Transactions';
  }else if (pathname === '/schedules') {
    pageTitle = 'Schedules';
  } else if (pathname === '/settings') {
    pageTitle = 'Settings';
  }  // Add more cases for other pages
  return (
    <div className='navbar'>
      <div className="logo">
        {/* <img src="" alt="" /> */}
        <h1>{pageTitle}</h1>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search icon" className='icon'/>
        {/* <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' /> */}
        <div className=" notification">
          <img src="/bell.svg" alt="" />
          <span></span>
        </div>
        <div className="user">
          <img src="/account-box-fill.svg" alt="user image" />
        </div>
        {/* <img src="/settings.svg" alt="" className='icon' /> */}
      </div>
    </div>
  )
}
