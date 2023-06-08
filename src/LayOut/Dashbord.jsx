import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {

    const role = 'instractor';

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button lg:hidden">Open drawer</label>

                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}


                    {
                        role === 'admin' ? <>
                            <li><Link to='/dashbord/allusers'>ALL USERS</Link></li>
                            <li><Link to='/dashbord/addclass'>Add Class</Link></li>
                        </> 
                        :"" || role == 'instractor' ? <>
                            <li><Link to='/dashbord/enroll'>Enroll Student</Link></li>
                            <li><Link to='/dashbord/feedback'>FeedBack</Link></li>
                            <li><Link to='/dashbord/addclass'>Add Class</Link></li>
                            <li><Link to='/dashbord/myclass'>My Class</Link></li>
                            <li><Link to='/'>Backto Home</Link></li>
                        </> :<>student</>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashbord;