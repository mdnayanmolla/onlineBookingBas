import { Routes,Route } from "react-router-dom";
import GetSterted from "../../container/getStarted/GetSterted";
import Splash from "../../container/splash/Splash";
import Landing from "../../container/landing/Landing";
import SignIn from "../../authentication/SignIn";
import SignUp from "../../authentication/SignUp";
import Verifaction from "../../authentication/Verifaction";
import Home from "../../container/home/Home";
import Tickets from "../../container/tickets/Tickets";
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
        </Routes>
    );
};


export default Index;