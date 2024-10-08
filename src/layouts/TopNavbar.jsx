import PropTypes from 'prop-types';
import { IoIosArrowBack } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const TopNavbar = ({title}) => {
    return (
        <div className="bg-primary py-3 rounded-tl-lg rounded-tr-lg px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                   <div className="h-8 w-8 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black duration-500 text-primary mr-4">  <IoIosArrowBack /></div>
                    <span>{title}</span>
                </div>
                <div className="flex">
                   {/* <img className="h-5 w-5 rounded-full border-white" src={profileIcon} alt=""/> */}
                  <button><FaBars className="text-xl"/></button>
                </div>
            </div>
        </div>
    );
};
TopNavbar.propTypes = {
    title: PropTypes.obj,
  };

export default TopNavbar;