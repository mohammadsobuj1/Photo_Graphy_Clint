import React from 'react';

import { useNavigate } from 'react-router-dom';


const Error = () => {
    const navigate = useNavigate()
    const backHandaler = () => {
        navigate('/')
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className=' md:w-[50%] mt-20 mx-auto'>

                <img src="https://media.istockphoto.com/id/1455512287/photo/businessman-or-user-holding-smartphone-with-triangle-caution-warning-sign-red-for.webp?b=1&s=170667a&w=0&k=20&c=R9Xff19OV2zU6YWgbtn9LpazN2MrTq05SWlYOz6Us54=" alt="" />
            </div>
            <h1 className='font-extrabold text-5xl text-center uppercase text-red-600'>oops !!! 404  error </h1>
            <p className='text-xl font-medium text-center  '>this page is not found ...!!</p>
            <div className="text-center mt-2 p-5">
                <button className="btn btn-outline   border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white" onClick={backHandaler}>Back to Home </button>
            </div>
        </>
    );
};

export default Error;