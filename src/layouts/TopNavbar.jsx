import PropTypes from 'prop-types';
import { IoIosArrowBack } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is imported

const TopNavbar = ({ title }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="bg-primary py-3 rounded-tl-lg rounded-tr-lg relative px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="h-8 w-8 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black duration-500 text-primary mr-4">
                        <IoIosArrowBack />
                    </div>
                    <span>{title}</span>
                </div>
                <div className="flex">
                    <button onClick={toggleSidebar} className="text-white">
                        <FaBars className="text-xl" />
                    </button>
                </div>
            </div>
            {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
        </div>
    );
};

TopNavbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TopNavbar;
