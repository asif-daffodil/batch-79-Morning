import React, { useState } from 'react';

const Bangladesh = () => {
    const html = document.querySelector("html");

    const [btnText, setBtnText] = useState("Dark");

    const clickHandeler = () => {
        if(!html.classList.contains("dark")){
            html.classList.add("dark");
            setBtnText("Light")
        }else{
            html.classList.remove("dark");
            setBtnText("Dark")
        }
    }
    return (
        <div className='text-xs md:text-base lg:text-xl flex flex-col justify-center items-center min-h-screen text-blue-800 md:text-red-800 lg:text-green-800 font-bold dark:bg-gray-800 dark:text-gray-100'>
            Amar Bangladesh
            <button className='w-40 h-14 border border-orange-600 text-gray-700 rounded-l-full rounded-r-full mt-5 hover:bg-orange-600 hover:text-white dark:text-gray-100' onClick={() => clickHandeler()}>{btnText}</button>
        </div>
    );
};

export default Bangladesh;