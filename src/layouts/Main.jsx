import { Outlet } from "react-router-dom";
import Splash from "../container/splash/Splash";
// import GetSterted from "../container/getStarted/GetSterted";


const Main = () => {
    return (
        <div>
            <Splash/>
            <Outlet></Outlet>
            {/* <GetSterted/> */}
            
        </div>
    );
};

export default Main;