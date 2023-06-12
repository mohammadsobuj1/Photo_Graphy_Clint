
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCopyright, FaFacebook, FaInstagram, FaRegCopyright, FaTwitter, FaYoutube } from 'react-icons/fa';




const Footer = () => {
    return (
        <div className="bg-gray-600">
            <div className=" grid md:grid-cols-5 grid-cols-2  w-[100%] mx-auto md:p-16 p-11 mt-10">
                <div className=''>
                  
                    <div className="font-bold text-xl text-white opacity-80">  Pexl_Pro</div>
                </div>
                <div className="m-3">
                    <ul>
                        <Link> <li className="font-bold underline text-xl text-white opacity-80">Services</li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">sports   </li></Link>
                        <Link> <li className="font-medium text-white my-2 opacity-75 font-italic ">Nature</li></Link>
                        <Link><li className="font-medium text-white my-2 font-italic ">Model</li></Link>
                        <Link><li className="font-medium text-white my-2 font-italic "> Movie </li></Link>
                    </ul>
                </div>
                <div className="m-3">
                    <ul>
                        <Link> <li className="font-bold underline text-xl text-white opacity-80">Useful Links</li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Weading </li></Link>
                        <Link> <li className="font-medium text-white my-2 opacity-75 font-italic ">Pexl_pro </li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Star Wear</li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Privacy &  Policy</li></Link>
                    </ul>
                </div>
                <div className="m-3">
                    <ul>
                        <Link> <li className="font-bold underline text-xl text-white opacity-80">About us</li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Branding</li></Link>
                        <Link> <li className="font-medium text-white my-2 opacity-75 font-italic ">Contact</li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Jobs</li></Link>
                        <Link><li className="font-medium text-white my-2 opacity-75 font-italic ">Advertisement</li></Link>
                    </ul>
                </div>
                <div className="m-3">
                    <ul>
                        <Link> <li className="font-bold underline text-xl text-white opacity-80">Social Media</li></Link>
                        <Link><li className="text-3xl my-2 opacity-75 text-blue-900"><FaFacebook /></li></Link>
                        <Link> <li className="text-3xl my-2 opacity-75 text-blue-700"><FaTwitter /></li></Link>
                        <Link><li className="text-3xl my-2 opacity-75 text-red-400"><FaInstagram /></li></Link>
                        <Link><li className="text-3xl my-2 opacity-75 text-red-700"><FaYoutube /></li></Link>

                    </ul>
                </div>

            </div>
      
            <p className='text-center text-sm font-semibold font-italic pb-3 text-white'>Copyright © 2023 - All right reserved by Pexl_Pro Ltd.</p>
        </div>
    );
};

export default Footer;

