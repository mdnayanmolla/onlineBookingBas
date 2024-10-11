import { Link } from "react-router-dom";
import TopNavbar from "../../layouts/TopNavbar";
import bus1 from "../../static/img/item1.png"
import { FaStar } from "react-icons/fa6";
import { FaBusSimple } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Tabs } from 'antd';
import { IoInformationCircle } from "react-icons/io5";

const { TabPane } = Tabs;

const BusDatiles = () => {

    const onChange = (key) => {
        console.log('Active tab key:', key);
    };

    return (
        <div>
            <TopNavbar title="Bus Details" />
            <div className="">
                <div className="flex px-4 my-6 pb-6 space-x-4 items-center border-b">
                    <div className="w-[30%] border p-4">
                        <img className="w-full" src={bus1} alt="" />
                    </div>
                    <div className="w-[70%]">
                        <h5 className="text-[#444]"> Ena Poribohon</h5>
                        <div className="flex space-x-1 items-center">
                            <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                            <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                            <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                            <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                            <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                            <span className="text-[#444] text-[10px]">4.0</span>
                        </div>
                        <div className="flex justify-between pt-3">
                            <p className="text-[#444] text-[12px] flex items-center"><CiLocationOn className="text-primary mr-2" /> Dhaka To Bugora</p>
                            <span className="flex items-center text-[#444] text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> St. $5</span>
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
                            <p className="text-[10px]">AC</p>
                            <p className="text-[12px] text-black">Ac is available</p>
                            <p className="text-[10px] mt-3">Safety Features</p>
                            <p className="text-[12px] text-black">Sanitized, Masks</p>
                            <p className="text-[10px] mt-3">Snacks</p>
                            <p className="text-[12px] text-black">Juice / shake</p>
                        </div>
                    </div>
                </div>


                <div className="px-4">

                    <Tabs
                        defaultActiveKey="1"
                        onChange={onChange}
                        tabBarStyle={{ marginBottom: 0 }}  // Ensure no margin below the tab bar
                        className="p-0 m-0"                // Remove padding and margin from Tabs
                    >
                        <TabPane
                            tab={
                                <span className="flex items-center">
                                    <IoInformationCircle className="m-0 p-0" /> {/* Remove icon padding/margin */}
                                    <span className="ml-2">Info</span>           {/* Adjust text spacing */}
                                </span>
                            }
                            key="1"
                            className="p-0 m-0 "
                        >
                            <div className="p-4 ">Content of Tab Pane 1</div>
                        </TabPane>

                        <TabPane
                            tab={
                                <span className="flex items-center ">
                                    <IoInformationCircle className="m-0 p-0" />
                                    <span className="ml-2">Info</span>
                                </span>
                            }
                            key="2"
                            className="p-0 m-0 "
                        >
                            <div className="p-4 bg-primary text-white">Content of Tab Pane 2</div>
                        </TabPane>

                        <TabPane
                            tab={
                                <span className="flex items-center">
                                    <IoInformationCircle className="m-0 p-0" />
                                    <span className="ml-2">Info</span>
                                </span>
                            }
                            key="3"
                            className="p-0 m-0 bg-primary text-white"
                        >
                            <div className="p-4 bg-primary text-white">Content of Tab Pane 3</div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default BusDatiles;