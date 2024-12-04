import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // This is called when the div is clicked
    };

    return (
        <div 
            onClick={handleBackClick} 
            className="h-8 w-8 flex items-center justify-center bg-white rounded-full hover:text-white hover:bg-black duration-500 text-primary mr-4 cursor-pointer"
        >
            <IoIosArrowBack />
        </div>
    );
};

export default BackButton;
