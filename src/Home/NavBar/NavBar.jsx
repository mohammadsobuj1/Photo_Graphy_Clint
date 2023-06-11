import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import ActiveNav from '../../Components/ActiveLink/ActiveNav';
import Title from '../../Components/Title/Title';
import { FaCamera } from 'react-icons/fa';

const NavBar = () => {
    const {user, logOut} =useContext(AuthContext)

const logOutHandelar =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
        console.log(error.message)
    })
}


    const NavItems = <>
        <li className='hover:bg-violet-400 hover:text-orange-300'><ActiveNav to='/'>Home</ActiveNav></li>
        <li className='hover:bg-violet-400 hover:text-orange-300'><ActiveNav to='/instractor'>Instructors</ActiveNav></li>
        <li className='hover:bg-violet-400 hover:text-orange-300'><ActiveNav to='/classes'>Classes</ActiveNav></li>
        {
            user ?
                <li className='hover:bg-violet-400 hover:text-orange-300'><ActiveNav to='/dashbord'>Dashboard </ActiveNav></li>
                : ""
        }
       
    </>

    return (
        <div>
            <div className="navbar sticky bg-violet-400 text-black font-semibold">
                <Title title={'Home'}/>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black">
                            {NavItems}
                        </ul>
                    </div>
                    <div className="flex gap-2  items-center justify-center">
                    <span className='text-xl hover:text-orange-300 text-white'><FaCamera /></span>
                    <a className=" normal-case text-white font-mono text-xl hover:text-orange-300"> PEXL_PRO</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex md:gap-5'>
                            <div className='md:flex gap-2 mt-2  hover: '>
                                <Link onClick={logOutHandelar} className='md:text-xl font-bold font-italic text-white ' to='/login'>Log Out</Link>

                            </div>
                            <div className="tooltip  tooltip-secondary tooltip-bottom " data-tip={user.displayName}>
                                <label tabIndex={0} className=" btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>

                            </div>

                        </div>

                            :
                            <div className='md:flex gap-2 font-italic hover:text-orange-400 '>
                                {/* <FaRegUserCircle className='text-2xl mt-1' /> */}
                                <Link className='text-xl font-bold text-white' to='/login'>Log In</Link>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;