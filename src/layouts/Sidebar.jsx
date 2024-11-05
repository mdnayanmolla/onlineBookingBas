import PropTypes from 'prop-types';
import profileImg from "../static/img/profile.jpg"
import { Link } from 'react-router-dom';
import { FaUnsplash } from "react-icons/fa";
import { PiAirplaneLanding } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { PiSeatBold } from "react-icons/pi";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { CiTextAlignJustify } from "react-icons/ci";


const Sidebar = ({ toggleSidebar }) => {
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-75  z-50`}
            onClick={toggleSidebar} // Close sidebar when clicking outside
        >
            <div
                className="bg-primary w-[70%] h-full max-h-full relative rounded-tl-2xl"
                onClick={(e) => e.stopPropagation()} // Prevents click from closing sidebar when clicking inside
            >
              <div className=" flex py-10 px-10 ">
                <div>
                  <img src={profileImg} alt='Profile Image' className='rounded-full'/>
                </div>
                <div className='pl-5'>
                    <h4>I am Nayan Molla</h4>
                    <p className='text-[14px] text-white'>0173804654</p>
                    <p className='text-[10px] text-gray-300 pt-2'>Version 1.23</p>
                </div>
              </div>
              <div className="bg-white h-screen flex flex-col">
              <ul className="overflow-y-auto max-h-[70vh] sidebar-scroll"> {/* Adjust height as needed */}
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='/' className="flex items-center space-x-2 text-[14px]">  <span><FaUnsplash /></span> <span>Splash</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='/landing' className="flex items-center space-x-2 "><span><PiAirplaneLanding /></span> <span>Landing</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='/get-started' className="flex items-center space-x-2"><span><FaPlay /></span> <span>Get Started</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='' className="flex items-center space-x-2"><span><IoKey /></span> <span>Authentication</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]' >
                        <Link to='/home' className="flex items-center space-x-2"><span><FaHome /></span> <span>Home Page</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link  className="flex items-center space-x-2"> <span><BiSolidOffer /></span> <span>Offers</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='/listing' className="flex items-center space-x-2"><span><CiViewList /> </span> <span>Listing</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='/bus-details' className="flex items-center space-x-2"> <span><TbListDetails /></span> <span>Bus Details</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link to='/not-found' className="flex items-center space-x-2"><span><PiSeatBold /></span> <span>Select Seat</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link className="flex items-center space-x-2"><span><CiBookmarkCheck /></span> <span>Checkout</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link className="flex items-center space-x-2"><span><MdOutlinePayment /></span> <span>Payment</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link className="flex items-center space-x-2"> <span><ImProfile /></span><span>Profile page</span> </Link>
                    </li>
                    <li className=' border-b px-10 hover:bg-[#edf1f4] duration-500 py-3 text-[14px]'>
                        <Link className="flex items-center space-x-2"><span><CiTextAlignJustify /></span><span> Extra Page</span> </Link>
                    </li>
                 </ul>
              </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
