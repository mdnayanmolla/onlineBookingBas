
import Button from "../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import RootLogo from "../../static/img/rootLogo.png"
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="">
            <div className="h-[calc(100vh-70px)] flex items-center bg- justify-center">
                <div className="relative">
                    <Link to="/get-started">
                        <img className="h-32 w-32 " src={RootLogo} alt="" />
                        <div className="h-32 w-32 bg-white bg-opacity-50 rounded-full absolute top-0 left-0 animate-scale"></div>
                    </Link>
                </div>
            </div>

            <div className="flex items-end h-[50px] px-4 rounded-2xl w-full">
                <Link to="/get-started" className="w-full rounded-2xl">
                    <Button btnTitle={"GET STARTED "} btnIcon={<FaArrowRightLong className='animate-slide pl-1' />} ></Button>
                </Link>
            </div>
        </div>
    );
};



export default Splash;