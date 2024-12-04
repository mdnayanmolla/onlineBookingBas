import { Link, useParams } from "react-router-dom";
import TopNavbar from "../../layouts/TopNavbar";
// import bus1 from "../../static/img/item1.png"
import { FaStar } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Tabs } from 'antd';
import profileImg from "../../static/img/profile.jpg"
import { IoInformationCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import axios from "axios";

const { TabPane } = Tabs;

const BusDatiles = () => {
    const [busDetail, setBusDetail] = useState(null)
    const { name } = useParams()
    console.log('name', name);

    const onChange = (key) => {
        console.log('Active tab key:', key);
    };

    console.log('busDetail', busDetail);
    useEffect(() => {
        async function fetchBus() {
            try {
                const response = await axios.get('public/jsonData/busList.json');
                const foundBus = response.data.find(bus => bus.name.toString() === name);
                if (foundBus) {
                    setBusDetail(foundBus)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchBus();
    }, [name])
    if (!busDetail) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mb-4">
            <TopNavbar title="Bus Details" />
            <div className="">
                <div key={busDetail.id} className="flex px-4 my-6 pb-6 space-x-4 items-center border-b">
                    {/* Bus Image */}
                    <div className="w-[30%] border p-4">
                        <img className="w-full" src={busDetail.image} alt={busDetail.name} />
                    </div>
                    {/* Bus Details */}
                    <div className="w-[70%]">
                        <h5 className="text-[#444]">{busDetail.name}</h5>
                        <div className="flex space-x-1 items-center">
                            {/* Rating Stars */}
                            {[...Array(5)].map((_, index) => (
                                <Link key={index}>
                                    <span className={`text-primary text-[10px] ${index < busDetail.rating ? "text-primary" : "text-gray-300"}`}>
                                        <FaStar />
                                    </span>
                                </Link>
                            ))}
                            <span className="text-[#444] text-[10px]">{busDetail.rating}</span>
                        </div>

                        {/* Route and Price */}
                        <div className="flex justify-between pt-3">
                            <p className="text-[#444] text-[12px] flex items-center">
                                <CiLocationOn className="text-primary mr-2" />
                                {busDetail.from} To {busDetail.to}
                            </p>
                            <span className="flex items-center text-[#444] text-[12px] space-x-2">
                                <FaBusSimple className="text-primary mr-2" /> St. ${busDetail.price}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-b">
                    <div className="flex px-4 pb-5">
                        <div className="flex-1">
                            <p className="text-[10px]">Wifi</p>
                            <p className="text-[12px] text-black">Access in the bus</p>
                            <p className="text-[10px] mt-3">Dinner / Lunch</p>
                            <p className="text-[12px] text-black">Yes</p>
                            <p className="text-[10px] mt-3">Essentials</p>
                            <p className="text-[12px] text-black">Pillow, Water</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] uppercase">{busDetail.type}</p>
                            <p className="text-[12px] text-black">Ac is available</p>
                            <p className="text-[10px] mt-3">Safety Features</p>
                            <p className="text-[12px] text-black">Sanitized, Masks</p>
                            <p className="text-[10px] mt-3">Snacks</p>
                            <p className="text-[12px] text-black">Juice / shake</p>
                        </div>
                    </div>
                </div>


                <div className=" flex justify-between">

                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        tabBarStyle={{ marginBottom: 0 }} // No margin below the tab bar
                        className="p-0 m-0 flex justify-between w-full "
                    >
                        {/* Tab 1 */}
                        <TabPane
                            tab={
                                <span className="flex items-center">
                                    <IoInformationCircle className="m-0 p-0" /> {/* Icon with no padding/margin */}
                                    <span className="ml-2">Info</span> {/* Adjust text spacing */}
                                </span>
                            }
                            key="1"
                            className="p-0 m-0"
                        >
                            <div className="p-4">
                                <p><strong>About {busDetail.name}</strong></p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </TabPane>

                        {/* Tab 2 */}
                        <TabPane
                            tab={
                                <span className="flex items-center">
                                    <FaStar className="m-0 p-0" />
                                    <span className="ml-2">Review</span>
                                </span>
                            }
                            key="2"
                            className="p-0 m-0"
                        >
                            <div className="px-4">
                                <div className="px-4 w-full py-4 bg-white  rounded-md">
                                    <div className="flex items-center space-x-4 mb-2">
                                        <img src={profileImg} alt="" className="rounded-full h-[50px] w-[50px]" />
                                        <div className="w-full">
                                            <h6 className="text-[#444]">Mike Jhon</h6>
                                            <p className="text-primary flex justify-between">Good  <span className="text-[10px]">24/03/2020</span></p>
                                        </div>
                                    </div>
                                    <p>Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="px-4 mt-3">
                                <div className="px-4 w-full py-4 bg-white  rounded-md">
                                    <div className="flex items-center w-full space-x-4 mb-2">
                                        <img src={profileImg} alt="" className="rounded-full h-[50px] w-[50px]" />
                                        <div className="w-full">
                                            <h6 className="text-[#444] w-full">Mike Jhon</h6>
                                            <p className="text-primary flex justify-between">Good  <span className="text-[10px]">24/03/2020</span></p>
                                        </div>
                                    </div>
                                    <p>Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </TabPane>

                        {/* Tab 3 */}
                        <TabPane
                            tab={
                                <span className="flex items-center">
                                    <IoReload className="m-0 p-0" />
                                    <span className="ml-2">Pick Up</span>
                                </span>
                            }
                            key="3"
                            className="p-0 m-0"
                        >
                            <div className="px-4   text-white">
                                <div className="bg-white w-full px-4 py-4 rounded-md">
                                    <h4 className="text-[#444] border-b-[1px] pb-2 border-[#eff1f3]">Boarding Point Selected</h4>
                                    <div className="flex pt-4 justify-between items-center">

                                        <p className="flex space-x-4 items-center"> <span className="h-[10px] w-[10px] border-2 border-primary rounded-full "></span><strong>4:30</strong></p>
                                        <p><strong>Opp. Bus Stand {busDetail.name} Poribohon</strong> Opp. Bus Stand</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 mt-3 text-white">
                                <div className="bg-white w-full px-4 py-4 rounded-md">
                                    <h4 className="text-[#444] border-b-[1px] pb-2 border-[#eff1f3]">Droping Point Selected</h4>
                                    <div className="flex pt-4 justify-between items-center">

                                        <p className="flex space-x-4 items-center"> <span className="h-[10px] w-[10px] border-2 border-primary rounded-full "></span> <strong>4:30</strong></p>
                                        <p><strong>Opp. Bus Stand {busDetail.name} Poribohon</strong> Opp. Bus Stand</p>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default BusDatiles;