import { IoIosArrowBack } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const TopNavbar = () => {
    return (
        <div className="bg-primary py-6 rounded-tl-lg rounded-tr-lg px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                   <div className="h-8 w-8 flex items-center justify-center bg-white rounded-full text-primary mr-4">  <IoIosArrowBack /></div>
                    <span>Create an account</span>
                </div>
                <div>
                  <button><FaBars className="text-xl"/></button>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;