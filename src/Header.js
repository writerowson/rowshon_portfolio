import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/Images/logo.png'
const Header = () => {
    const menuItems = <>
        <li className=' font-semibold'><Link to="/">Home</Link></li>
        <li className=' font-semibold'><Link to="/appointment">Projects</Link></li>
        <li className=' font-semibold'><Link to="/review">Blog</Link></li>
        <li className=' font-semibold'><Link to="/contact">Contact</Link></li>
        <li className=' font-semibold'><Link to="/about">About</Link></li>

    </>
    return (
        <div className="navbar fixed top-0 z-40 bg-primary text-secondary  ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost text-accent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-secondary">

                        <ul className="p-2">
                            {menuItems}
                        </ul>

                    </ul>
                </div>
                {/* <a className="btn btn-ghost  normal-case text-2xl font-semibold ">myself</a> */}
                <img className='w-11 h-11  ml-10 ' src={logo} alt="logo" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;