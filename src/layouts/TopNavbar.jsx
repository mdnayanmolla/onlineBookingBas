import PropTypes from 'prop-types';

import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is imported
import BackButton from '../components/backButton/BackButton';

const TopNavbar = ({ title }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="bg-primary py-3 rounded-tl-lg rounded-tr-lg relative px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <BackButton />
                    <span>{title}</span>
                </div>
                <div className="flex">
                    <button onClick={toggleSidebar} className="text-white">
                        <FaBars className="text-xl" />
                    </button>
                </div>
            </div>
            {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />}
        </div>
    );
};

TopNavbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TopNavbar;
