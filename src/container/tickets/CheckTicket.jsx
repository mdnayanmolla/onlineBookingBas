import { Link } from "react-router-dom";
import TopNavbar from "../../layouts/TopNavbar";
import { FaStar } from "react-icons/fa6";
import qrCode from "../../static/img/qrcode.png"
import { IoLocation } from "react-icons/io5";

import CheckBtn from "../../components/CheckBtn";

const CheckTicket = () => {
    return (
        <div className="relative mb-32">
            <TopNavbar title="Tickets" />
            <div className="flex px-4 bg-white rounded-lg py-6 mx-4 my-4 border border-[#ffc107]">
                <div className="flex-1">
                    <p className="text-[#899ba6] text-[12px]">GOING FROM</p>
                    <p>LUDHIANA</p>
                    <p className="text-[#899ba6] text-[12px] mt-3">DATE OF JOURNEY</p>
                    <p>05 May, 2022</p>
                </div>

                <div className="flex-1">
                    <p className="text-[#899ba6] text-[12px]">YOU RATED</p>
                    <p>GOA</p>
                    <p className="text-[#899ba6] text-[12px] mt-3">  YOU RATED </p>
                    <p className="flex items-center space-x-1"><Link><span className="text-[#ffc107] text-[15px]"><FaStar /></span></Link> 4.5</p>
                </div>
            </div>
            <div className="px-4 bg-white rounded-lg py-6 mx-4 my-4">
                <p className="text-[12px] text-primary">PICKUP FROM</p>
                <p>Model Towm, Ludhiana - 8:15 PM</p>
                <p className="text-[12px] text-primary mt-4">DROPPING AT</p>
                <p>Goa Mall Road - 7: 00 AM</p>
            </div>
            <div className="bg-white px-4 rounded-md mx-4">
                <div className="py-6 flex">
                    <div className="h-[70px] w-[70px]">
                    <IoLocation className="text-5xl text-black" />
                    </div>
                    <div className="px-4 w-full  ">
                        <h4 className="text-[#444] ">View Boarding Location on Map</h4>
                        <p>Akshya Nagar 1st Block 1st Cross, Rammurthy</p>
                        <p>Nagar, Bangalore</p>
                        <p>560016</p>
                    </div>
                </div>
            </div>
            <div className="bg-white px-4 rounded-md mx-4 my-4">
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
          <CheckBtn/>
        </div>
    );
};

export default CheckTicket;