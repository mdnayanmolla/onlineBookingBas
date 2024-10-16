import { Routes,Route } from "react-router-dom";
import GetSterted from "../../container/getStarted/GetSterted";
import Splash from "../../container/splash/Splash";
import Landing from "../../container/landing/Landing";
import SignIn from "../../authentication/SignIn";
import SignUp from "../../authentication/SignUp";
import Verifaction from "../../authentication/Verifaction";
import Home from "../../container/home/Home";
import Tickets from "../../container/tickets/Tickets";
import Notification from "../../container/notification/Notification";
import Account from "../../container/account/Account";
import Listing from "../../container/listing/Listing";
import BusDatiles from "../../container/busDtails/BusDatiles";
// import SignUp from "../../authentication/SignUp";


const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/get-started" element={<GetSterted/>}/>
            <Route path="/landing" element={<Landing/>} />
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/verification" element={<Verifaction/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/tickets" element={<Tickets/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/listing" element={<Listing/>}/>
            <Route path="/bus-details" element={<BusDatiles/>}/>
        
        </Routes>
    );
};


export default Index;