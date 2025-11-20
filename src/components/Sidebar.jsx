import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const linkClasses = (path) =>
        `block px-4 py-2 rounded-lg font-medium mb-2 ${location.pathname === path
            ? "bg-gray-700 text-white"
            : "text-gray-300 hover:bg-gray-800"
        }`;

    return (
        <div className="w-64 bg-black text-white min-h-full p-4 shadow-lg rounded-l-xl">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

            <nav>
                <Link to="/" className={linkClasses("/")}>
                    Home
                </Link>
                <Link to="/data" className={linkClasses("/data")}>
                    Data
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
