import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveNav = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "  text-white border-b-2  font-bold " : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveNav;