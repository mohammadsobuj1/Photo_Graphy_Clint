import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin/useAdmin';
import useInstractor from '../Hooks/useInstractor/useInstractor';
import ActiveLink from '../Components/ActiveLink/ActiveLink';
import { FaArrowCircleRight, FaCalendarCheck, FaHome, FaHouseUser, FaIdCard, FaMix, FaMoneyCheckAlt, FaPaste, FaRegAddressCard } from "react-icons/fa";
import Title from '../Components/Title/Title';
import ActiveNav from '../Components/ActiveLink/ActiveNav';

const Dashbord = () => {
    const [isAdmin] = useAdmin()
    const [isInstractor] = useInstractor()
    // const isInstractor = true;


    return (
        <div className="drawer lg:drawer-open bg-gray-200">
            <Title title={'Dashbord'} />
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-gray-300">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-primary  border-none bg-gradient-to-r from-violet-500 to-violet-400 font-sans text-white drawer-button lg:hidden">Open drawer</label>

                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-violet-400 font-semibold  text-gray-700 md:pt-16">
                    {/* Sidebar content here */}


                    {
                        isAdmin ? <>
                            <li><ActiveLink to='/dashbord/allusers'>ALL USERS</ActiveLink></li>
                            <li><ActiveLink to='/dashbord/manageclass'>Manage Class</ActiveLink></li>
                        </>
                            : "" || isInstractor ? <>

                                <li><ActiveLink to='/dashbord/addclass'><FaRegAddressCard className='text-xl' />  Add Class</ActiveLink></li>
                                <li><ActiveLink to='/dashbord/myclass'> <FaPaste className='text-xl' /> My Class</ActiveLink></li>
                                <li><ActiveLink to='/dashbord/totalenroll'> <FaMix className='text-xl' /> Total Enroll</ActiveLink></li>

                            </> :

                                <>
                                    <li><ActiveLink to='/'> <FaHome className='text-xl' /> Home</ActiveLink></li>
                                    <li className='text-orange-700'><Link to='/dashbord'> <FaHome className='text-xl' />Student Home</Link></li>
                                    {/* <li><ActiveLink to='/dashbord/myclass'>My Class</ActiveLink></li> */}

                                    <li><ActiveLink to='/dashbord/myselactclaess'> <FaCalendarCheck className='text-xl' />  My Selacted Class</ActiveLink></li>
                                    <li><ActiveLink to='/dashbord/myenroll' > <FaMoneyCheckAlt className='text-xl' />  My Enroll Classes</ActiveLink></li>
                                    <li><ActiveLink to='/dashbord/historey' > <FaIdCard className='text-xl' /> Payment History  </ActiveLink></li>

                                </>
                    }

                </ul>



            </div>

        </div>
    );
};

export default Dashbord;