import MenuBar from "../../layouts/MenuBar";
import TopNavbar from "../../layouts/TopNavbar";
import { IoMdCheckmark } from "react-icons/io";
import { FaPercent } from "react-icons/fa";
import { FaGift } from "react-icons/fa";


const Notification = () => {
    return (
        <div className="mb-24 relative">
             <TopNavbar title={"Notification"}/>
              <div className="bg-[#f8f9fa] px-4 ">
                 <div className="flex bg-white  border-b border-[#dee2e6] py-6">
                    <div className="h-8 w-8 flex justify-center items-center bg-green-800 text-white rounded-full">
                    <IoMdCheckmark />
                    </div>
                    <div className="px-2 w-full">
                        <p className="flex justify-between items-center"> <span>Confirm your ticket</span> <span className="text-[12px]">10:14.AM</span></p>
                        <p className="text-[12px]"> Confirm your ticket dolor sit ame nsectetuer adipisicing elit sed</p>
                    </div>
                 </div>

                 <div className="flex bg-white  border-b border-[#dee2e6] py-6">
                    <div className="h-8 w-8 flex justify-center items-center bg-blue-800 text-white rounded-full">
                    <FaPercent />
                    </div>
                    <div className="px-2 w-full">
                        <p className="flex justify-between items-center"> <span>Today Your Discount</span> <span className="text-[12px]">12:00.PM                        </span></p>
                        <p className="text-[12px]"> Hot Discount for today uer adipisicing wisted cllege</p>
                    </div>
                 </div>

                 
                 <div className="flex bg-white  border-b border-[#dee2e6] py-6">
                    <div className="h-8 w-8 flex justify-center items-center bg-[#ffd044] text-[#444] rounded-full">
                    <FaGift />
                    </div>
                    <div className="px-2 w-full">
                        <p className="flex justify-between items-center"> <span>Today Your Discount</span> <span className="text-[12px]">03:20.PM                        </span></p>
                        <p className="text-[12px]"> Hot Discount for today uer adipisicing wisted cllege</p>
                    </div>
                 </div>
                   
                 <div className="flex bg-white  border-b border-[#dee2e6] py-6">
                    <div className="h-8 w-8 flex justify-center items-center bg-green-800 text-white rounded-full">
                    <IoMdCheckmark />
                    </div>
                    <div className="px-2 w-full">
                        <p className="flex justify-between items-center"> <span>Today Your Discount</span> <span className="text-[12px]">01:11.AM
                        </span></p>
                        <p className="text-[12px]"> Hot Discount for today uer adipisicing wisted cllege</p>
                    </div>
                 </div>
              </div>
             <MenuBar/>
        </div>
    );
};

export default Notification;