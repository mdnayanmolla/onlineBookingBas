
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ListData from '../listing/ListData';
import TopNavbar from '../../layouts/TopNavbar';
const SearchData = () => {

    const location = useLocation();
    const { buses = [] } = location.state || {};
    const [visibleCount, setVisibleCount] = useState(6); // Initial visible count
    // const [useParams] = useSearchParams();
    const  { from, to } = useParams();
    // const [from, to] = fromTo.split('-'); // Split on the dash
    // const to = useParams('to');
    //   console.log('fromTo',fromTo)
      console.log('to',to)
      console.log('from',from)

    // Function to load more items
    const handelLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <div>
            <TopNavbar />
          
            {buses && buses.length > 0 ? (
                <div className="px-4">
                    {
                        buses.map((bus, index) => (
                            <div key={index} className="border border-[#ffc107] py-2 px-4 bg-white flex mt-4 rounded-md">
                                <div className="flex-1">
                                    <p className="text-[10px]">GOING FROM</p>
                                    <p className="text-[12px]">{bus.from}</p>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px]">GOING TO</p>
                                    <p className="text-[12px]">{bus.to}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="grid grid-cols-2 bg-white justify-center gap-6">
                        {buses.slice(0, visibleCount).map((busItem) => (
                            <ListData key={busItem.id} busItem={busItem} buses={buses} />
                           
                        ))}
                    </div>
                    {visibleCount < buses.length && (
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

            ) : (
                <p>No buses found.</p>
            )}
        </div>
    );
};

export default SearchData;