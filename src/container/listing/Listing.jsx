import axios from 'axios';
import TopNavbar from "../../layouts/TopNavbar";


// import bus2 from "../../static/img/item2.png"
// import bus3 from "../../static/img/item3.png"
import { useState } from 'react';
import ListData from './ListData';


const Listing = () => {
const [bus,setbus] = useState([]);
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
                </div>
            </div>
        </div>
    );
};

export default Listing;