import axios from 'axios';
import { useState, useEffect } from 'react';
import TopNavbar from "../../layouts/TopNavbar";
import ListData from './ListData';

const Listing = () => {
  const [bus, setBus] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initial visible count

  // Fetch bus data on component mount
  useEffect(() => {
    async function fetchBusData() {
      try {
        const response = await axios.get('src/jsonData/busList.json');
        setBus(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBusData();
  }, []);

  // Function to load more items
  const handelLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

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
          {bus.slice(0, visibleCount).map((busItem) => (
            <ListData key={busItem.id} busItem={busItem} />
          ))}
        </div>

        {visibleCount < bus.length && (
       <div className='w-full flex  justify-center  pb-10'>
           <button 
            onClick={handelLoadMore} 
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          >
            Load More
          </button>
       </div>

        )}
      </div>
    </div>
  );
};

export default Listing;
