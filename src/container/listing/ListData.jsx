import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { GiLightningFrequency } from "react-icons/gi";
import { FaBusSimple } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';


const ListData = ({ busItem }) => {
    // console.log('busItem', busItem)
    const { name, from, to, type, seat_type, image, start_time } = busItem;
    return (
        <div>
            <Link to="/bus-details">
                <div className="px-4  py-4 space-y-3 border my-4">
                    <div className="bg-[#e8ebef] rounded-md">
                        <img src={image} alt="" />
                    </div>
                    <h5 className="text-[#444]">{name}</h5>
                    <p className="text-[12px] text-primary">{from} To {to}</p>
                    <div className="flex space-x-1 items-center">
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <Link><span className="text-primary text-[10px]"><FaStar /></span></Link>
                        <span className="text-[#444] text-[10px]">4.0</span>
                    </div>
                    <p
                        className="flex justify-between"><span className="flex items-center text-[12px] space-x-2"><GiLightningFrequency className="text-primary mr-2" /> {type} </span>
                        <span className="flex items-center text-[12px] space-x-2"><FaBusSimple className="text-primary mr-2" /> {seat_type}</span>
                    </p>
                    <div>
                        <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiClock2 /> </span>    <span className="text-[#444]">Journey Start</span></p>
                        <p className="text-[#444]">05 May,{start_time}</p>
                    </div>
                    <div>
                        <p className="flex items-center text-[12px]">  <span className="text-primary mr-2"><CiLocationOn /> </span>    <span className="text-[#444]">From - To </span></p>
                        <p className="text-[#444]">Dhaka To Bugora</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};


ListData.propTypes = {
    busItem: PropTypes.obj,
};

export default ListData;