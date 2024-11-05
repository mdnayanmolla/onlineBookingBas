// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div >
                <h3 className="text-[#444]">Opps Sorry...</h3>
                <Link to="/home">
                    <button className="bg-primary text-white px-4 py-2 rounded-md">Home Page</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;