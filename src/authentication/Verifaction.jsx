import { Link } from "react-router-dom";
import Primarybtn from "../components/buttons/Primarybtn";
import TopNavbar from "../layouts/TopNavbar";


const Verifaction = () => {
    return (
        <div>
            <TopNavbar title={"Enter verification code"}/>
            <div className="flex flex-wrap justify-center pt-20 gap-5 px-4">
                <div className="w-[80px] h-[80px] rounded-lg border border-primary flex justify-center items-center">
                    <span className="text-4xl text-black">1</span>
                </div>
                <div className="w-[80px] h-[80px] rounded-lg border border-primary flex justify-center items-center">
                <span className="text-4xl font-bold text-black">1</span>
                </div>
                <div className="w-[80px] h-[80px] rounded-lg border border-primary flex justify-center items-center">
                <span className="text-4xl font-bold text-black">1</span>
                </div>
                <div className="w-[80px] h-[80px] rounded-lg border border-primary flex justify-center items-center">
                <span className="text-4xl font-bold text-black">1</span>
                </div>
            </div>
            <div className="pt-10 px-4">
                <Link to="/home">
                   <Primarybtn title={"VERIFICATION"}/>
                </Link>
                <p className="text-center  pt-4"> <span className="text-[#444]">  Didnt receive it? <Link to="/signup" className="text-primary">Resend</Link></span></p>
            </div>
        </div>
    );
};

export default Verifaction;