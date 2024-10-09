import { Link } from "react-router-dom";
import MenuBar from "../../layouts/MenuBar";
import TopNavbar from "../../layouts/TopNavbar";
import { FaStar } from "react-icons/fa6";


const Tickets = () => {
    return (
        <div className="bg-[#f8f9fa] relative">
            <TopNavbar />
            <div className="px-4 mb-24 ">
                <div className="px-4 bg-white shadow-md mt-4 rounded-md ">
                    <div className="py-4 ">
                        <p className="flex justify-between items-center text-sm"><span>A/C Sleeper (2+1)</span> <span className="text-green-400">CONFIRMED</span></p>
                        <h5 className="text-[#444]">COXS CITY Travellers ISO 4002- 2006 Certified</h5>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <span className="text-[12px] text-gray-500">GOING FROM</span><br></br>
                                <span className="text-[12px] text-gray-800">LUDHIANA</span>
                            </div>
                            <div>
                                <span className="text-[12px] text-gray-500">TO</span><br></br>
                                <span className="text-[12px] text-gray-800">GOA</span>
                            </div>
                            <div>
                                <span className="text-[12px] text-gray-500">DATE OF JOURNEY</span><br></br>
                                <span className="text-[12px] text-gray-800">05 May, 2024</span>
                            </div>
                            <div>
                                <span className="text-[12px] text-gray-500">YOU RATED</span><br></br>
                                <Link>
                                    <span className="text-[12px] font-semibold text-gray-500 flex items-center space-x-1"><FaStar className="text-[#ffc107]"/> 3.5</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="px-4 bg-white shadow-md mt-4 rounded-md">
                    <div className="py-4">
                        <p className="flex justify-between items-center text-sm"><span>A/C Sleeper (2+1)</span> <span className="text-green-400">CONFIRMED</span></p>
                        <h5 className="text-[#444]">COXS CITY Travellers ISO 4002- 2006 Certified</h5>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <span className="text-[12px] text-gray-500">GOING FROM</span><br></br>
                                <span className="text-[12px] text-gray-800">LUDHIANA</span>
                            </div>
                            <div>
                                <span className="text-[12px] text-gray-500">TO</span><br></br>
                                <span className="text-[12px] text-gray-800">GOA</span>
                            </div>
                            <div>
                                <span className="text-[12px] text-gray-500">DATE OF JOURNEY</span><br></br>
                                <span className="text-[12px] text-gray-800">05 May, 2024</span>
                            </div>
                            <div>
                                <span className="text-[12px] text-gray-500">YOU RATED</span><br></br>
                                <Link>
                                    <span className="text-[12px] font-semibold text-green-600">RATE NOW</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <MenuBar />
        </div>
    );
};

export default Tickets;