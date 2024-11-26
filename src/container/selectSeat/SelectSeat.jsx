import { Link } from "react-router-dom";
import TopNavbar from "../../layouts/TopNavbar";
import { FaStar } from "react-icons/fa";
import selectSeat from "../../static/img/seat1.png"
import soldOut from "../../static/img/seat4.png"
import available from "../../static/img/seat3.png"
import driver from "../../static/img/seat2.png"
import qrCode from "../../static/img/qrcode.png"

import { useState } from "react";
// import WhiteBtn from "../../components/buttons/WhiteBtn";


const SelectSeat = () => {
    const [selected, setSelected] = useState([]);

    const handleClick = (index) => {
        setSelected((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index] // Add to selected
        );

        const data = selected.filter((i) => i !== index)
        setSelected([...data, index])
    };
    console.log('selected', selected);
    return (
        <div className="relative mb-[100px]">
            <TopNavbar title="Bus Select Seat" />
            <div className="bg-[#f8f9fa] rounded-md px-4">
                <div className="py-4">
                    <h3 className="text-[#444444]">Travellers ISO 9002- 2009 Certified</h3>
                    <div className="flex space-x-1 items-center">
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <span className="text-[#444] text-[10px]">4.0</span>
                    </div>
                </div>
                <div className="bg-white rounded-md flex px-4 py-5">
                    <div className="flex-1">
                        <p className="text-[11px]">Wifi</p>
                        <p className="text-[14px]">Access in the bus</p>
                        <p className="pt-4 text-[11px]">Dinner / Lunch </p>
                        <p className="text-[14px]">Yes </p>
                        <p className="pt-4 text-[11px]">Essentials</p>
                        <p className="text-[14px]">Pillow, Water</p>
                    </div>

                    <div className="flex-1">
                        <p className="text-[11px]">AC</p>
                        <p className="text-[14px]">Ac is available</p>
                        <p className="pt-4 text-[11px]">Safety Features</p>
                        <p className="text-[14px]">Sanitized, Masks</p>
                        <p className="pt-4 text-[11px]">Snacks</p>
                        <p className="text-[14px]">Juice / shake</p>
                    </div>

                </div>
                <div className="bg-white rounded-md px-4 flex my-4 py-6">
                    <div className="w-[100%]">
                        <div className="flex space-x-5 text-center w-full">
                            <div className="w-[70%] flex space-x-3" >
                                <div className="flex flex-col items-center">
                                    <img src={soldOut} alt="" className="w-[20px]" />
                                    <p className="text-[12px]">Sold Out</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={selectSeat} alt="" className="w-[20px]" />
                                    <p className="text-[12px]">Selected</p>
                                </div>
                                <div className="flex flex-col items-center ">
                                    <img src={available} alt="" className="w-[20px]" />
                                    <p className="text-[12px]">Available</p>
                                </div>
                            </div>

                            <div className="flex  items-start w-[30%] justify-end px-4">
                                <img src={driver} alt="" className="w-[25px]" />
                            </div>
                        </div>


                        <div>
                            <ul className="grid grid-cols-[60px_60px_auto] gap-4 my-6">
                                {[
                                    "A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3",
                                    "D1", "D2", "D3", "E1", "E2", "E3", "F1", "F2", "F3",
                                    "G1", "G2", "G3", "H1", "H2", "H3"
                                ].map((item, index) => (
                                    <li
                                        onClick={() => handleClick(index)}
                                        key={index}
                                        className={`border flex justify-center items-center py-2 h-[50px] w-[50px] rounded-md 
                                        ${(index + 1) % 3 === 0 ? "justify-self-end" : ""} 
                                        ${selected.includes(index) ? "bg-[#1e7e34] text-white" : ""}
                                        ${index === 3 || index === 4 || index === 5 ? "bg-[#bd2130] text-white" : ""}  // Red color for index 3 and 4
                                        ${index === 10 || index === 8 || index === 9 || index === 2 ? "bg-[#1e7e34] text-white" : ""}  // Red color for index 3 and 4
                                       `}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="bg-white px-4 rounded-md">
                    <div className="py-6 flex">
                        <div className="h-[70px] w-[70px]">
                            <img src={qrCode} alt="" className="w-full" />
                        </div>
                        <div className="px-4 w-full  ">
                            <h4 className="text-[#444] ">More Info.</h4>
                            <div className="grid grid-cols-2 w-full  gap-4">
                                <p className="justify-self-start">Passenger</p>
                                <p className="justify-self-end ">Joan Rase</p>
                                <p className="justify-self-start -mt-4">Ticket Number</p>
                                <p className="justify-self-end -mt-4">1313</p>
                                <p className="justify-self-start -mt-4">PNR Number</p>
                                <p className="justify-self-end -mt-4">56276-32324</p>
                                <p className="justify-self-start text-black"><strong>Amount Paid</strong></p>
                                <p className="justify-self-end  text-primary font-semibold">$700</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-2 fixed bottom-0 mb-[30px] left-4 right-4 w-auto rounded-lg">
                <Link to="/landing">
                   <div className="flex items-center justify-between text-white px-4">
                     <p className="text-white"> 
                        TOTAL $790 <br></br>
                        <span className="text-[10px]">SEATS SELECTED:3</span>

                     </p>
                     <p className="text-white">NEXT</p>
                   </div>
                </Link>
            </div>
        </div>
    );
};

export default SelectSeat;