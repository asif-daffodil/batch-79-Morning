import React, { useState } from 'react';
import bLogo from '../images/logoBlack.png';
import wLogo from '../images/logoWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [logo, setLogo] = useState(bLogo);
    const darkHandeller = () => {
        const html = document.querySelector("html");
        if(!html.classList.contains("dark")){
            html.classList.add("dark");
            setLogo(wLogo);
        }else{
            html.classList.remove("dark");
            setLogo(bLogo);
        }
    }

    return (
        
<nav className="w-screen bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow fixed z-50">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Batch 79</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-auto text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={faBars} />
        </button>
        <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" onClick={()=> darkHandeller()}>
                        <FontAwesomeIcon icon={faMoon} />
                    </button>
        <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "text-gray-700": isActive ? "text-blue-700" : null + `block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">Home</NavLink>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                </li>
                <li>
                    <NavLink to="/market-place" className={({ isActive, isPending }) => isPending ? "text-gray-700": isActive ? "text-blue-700" : null + `block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}>Marketplace</NavLink>
                </li>
                <li>
                    <NavLink to="/resources" className={({ isActive, isPending }) => isPending ? "text-gray-700": isActive ? "text-blue-700" : null + `block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`}>Resources</NavLink>
                </li>
                <li>
                    <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                <li>
                    <NavLink to="/allpost" className={({ isActive, isPending }) => isPending ? "text-gray-700": isActive ? "text-blue-700" : null + `block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">All Post</NavLink>
                </li>
                <li className='hidden md:block'>
                    <button className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" onClick={()=> darkHandeller()}>
                        <FontAwesomeIcon icon={faMoon} />
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" className="w-full mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden absolute top-full left-0">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul className="hidden md:block">
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Audience Management</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Creative Tools</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing Automation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    );
};

export default Navbar;