
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaDropbox } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";
const CheckBtn = () => {
    return (
        <div className="bg-white py-2 fixed -bottom-16 mb-20 left-4 right-4 w-auto shadow-md rounded-lg">
            <div className="flex justify-between py-2 items-center px-5">
                <Link to='/account'>
                    <p className="flex flex-col items-center text-primary duration-500 hover:text-red-800">
                        <BsFileEarmarkPdf className="text-2xl" /> Download Pdf
                    </p>
                </Link>
                <Link to='/account'>
                    <p className="flex flex-col items-center text-primary duration-500 hover:text-red-800">
                        <FaDropbox className="text-2xl" /> Dropbox Drive
                    </p>
                </Link>
                <Link to='/account'>
                    <p className="flex flex-col items-center text-primary duration-500 hover:text-red-800">
                        <IoMdShare className="text-2xl" /> Share
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default CheckBtn;