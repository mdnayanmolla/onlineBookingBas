import axios from 'axios';
import TopNavbar from "../../layouts/TopNavbar";


// import bus2 from "../../static/img/item2.png"
// import bus3 from "../../static/img/item3.png"
import { useState } from 'react';
import ListData from './ListData';


const Listing = () => {
const [bus,setbus] = useState[{}];

    async function fetchBusData() {
        try {
            const response = await axios.get('public/jsonData/busList.json');
            setbus(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
    fetchBusData();

    return (
        <div className="">
            <TopNavbar />
            
            <div className="px-4">
                <div className="border border-[#ffc107] py-2 px-4 bg-white flex mt-4 rounded-md">
                    <div className="flex-1">
                        <p className="text-[10px]">GOING FROM</p>
                        <p className="text-[12px]">LUDHIANA</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px]">GOING TO</p>
                        <p className="text-[12px]">GOA</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 bg-white justify-center gap-6">
                {
                    bus.map((busItem) => <ListData key={busItem.id} busItem={busItem}/> )
                }
                    

                    {/* <Link to="/bus-details">
                        <div className="px-4  py-4 space-y-3 border my-4">
                            <div className="bg-[#e8ebef] rounded-md">
                                <img src={bus2} alt="" />
                            </div>
                            <h5 className="text-[#444]">Shoag Scania Poribohon</h5>
                            <p className="text-[12px] text-primary">Dhaka To Chitagong</p>
                            <div className="flex space-x-1 items-center">
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <span className="text-[#444] text-[10px]">4.0</span>
                            </div>
                            <p
                                className="flex justify-between"><span className="flex items-center text-[12px] space-x-2"><GiLightningFrequency className="text-primary mr-2" /> AC </span>
                                <span className="flex items-center text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> 2/1</span>
                            </p>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiClock2 /> </span>    <span className="text-[#444]">Journey Start</span></p>
                                <p className="text-[#444]">05 May,12.00am</p>
                            </div>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiLocationOn /> </span>    <span className="text-[#444]">From - To </span></p>
                                <p className="text-[#444]">Dhaka To Bugora</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/bus-details">
                        <div className="px-4  py-4 space-y-3 border my-4">
                            <div className="bg-[#e8ebef] rounded-md">
                                <img src={bus3} alt="" />
                            </div>
                            <h5 className="text-[#444]">Hanif Poribohon</h5>
                            <p className="text-[12px] text-primary">Dhaka To Chitagong</p>
                            <div className="flex space-x-1 items-center">
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <span className="text-[#444] text-[10px]">4.0</span>
                            </div>
                            <p
                                className="flex justify-between"><span className="flex items-center text-[12px] space-x-2"><GiLightningFrequency className="text-primary mr-2" /> AC </span>
                                <span className="flex items-center text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> 2/1</span>
                            </p>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiClock2 /> </span>    <span className="text-[#444]">Journey Start</span></p>
                                <p className="text-[#444]">05 May,12.00am</p>
                            </div>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiLocationOn /> </span>    <span className="text-[#444]">From - To </span></p>
                                <p className="text-[#444]">Dhaka To Bugora</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/bus-details">
                        <div className="px-4  py-4 space-y-3 border my-4">
                            <div className="bg-[#e8ebef] rounded-md">
                                <img src={bus1} alt="" />
                            </div>
                            <h5 className="text-[#444]">Green Line Poribohon</h5>
                            <p className="text-[12px] text-primary">Dhaka To Chitagong</p>
                            <div className="flex space-x-1 items-center">
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <span className="text-[#444] text-[10px]">4.0</span>
                            </div>
                            <p
                                className="flex justify-between"><span className="flex items-center text-[12px] space-x-2"><GiLightningFrequency className="text-primary mr-2" /> AC </span>
                                <span className="flex items-center text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> 2/1</span>
                            </p>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiClock2 /> </span>    <span className="text-[#444]">Journey Start</span></p>
                                <p className="text-[#444]">05 May,12.00am</p>
                            </div>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiLocationOn /> </span>    <span className="text-[#444]">From - To </span></p>
                                <p className="text-[#444]">Dhaka To Bugora</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/bus-details">
                        <div className="px-4  py-4 space-y-3 border my-4">
                            <div className="bg-[#e8ebef] rounded-md">
                                <img src={bus2} alt="" />
                            </div>
                            <h5 className="text-[#444]">Shamoly Poribohon</h5>
                            <p className="text-[12px] text-primary">Dhaka To Chitagong</p>
                            <div className="flex space-x-1 items-center">
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <span className="text-[#444] text-[10px]">4.0</span>
                            </div>
                            <p
                                className="flex justify-between"><span className="flex items-center text-[12px] space-x-2"><GiLightningFrequency className="text-primary mr-2" /> AC </span>
                                <span className="flex items-center text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> 2/1</span>
                            </p>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiClock2 /> </span>    <span className="text-[#444]">Journey Start</span></p>
                                <p className="text-[#444]">05 May,12.00am</p>
                            </div>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiLocationOn /> </span>    <span className="text-[#444]">From - To </span></p>
                                <p className="text-[#444]">Dhaka To Bugora</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/bus-details">
                        <div className="px-4  py-4 space-y-3 border my-4">
                            <div className="bg-[#e8ebef] rounded-md">
                                <img src={bus3} alt="" />
                            </div>
                            <h5 className="text-[#444]">Hundai Poribohon</h5>
                            <p className="text-[12px] text-primary">Dhaka To Chitagong</p>
                            <div className="flex space-x-1 items-center">
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                                <span className="text-[#444] text-[10px]">4.0</span>
                            </div>
                            <p
                                className="flex justify-between"><span className="flex items-center text-[12px] space-x-2"><GiLightningFrequency className="text-primary mr-2" /> AC </span>
                                <span className="flex items-center text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> 2/1</span>
                            </p>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiClock2 /> </span>    <span className="text-[#444]">Journey Start</span></p>
                                <p className="text-[#444]">05 May,12.00am</p>
                            </div>
                            <div>
                                <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiLocationOn /> </span>    <span className="text-[#444]">From - To </span></p>
                                <p className="text-[#444]">Dhaka To Bugora</p>
                            </div>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Listing;