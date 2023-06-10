import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "  text-white border-b-2 border-gray-300 font-bold " : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;