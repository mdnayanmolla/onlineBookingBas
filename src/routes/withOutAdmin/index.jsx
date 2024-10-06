import { Routes,Route } from "react-router-dom";
import GetSterted from "../../container/getStarted/GetSterted";
import Splash from "../../container/splash/Splash";


const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Splash/>}/>
            <Route path="/get-started" element={<GetSterted/>}/>
        </Routes>
    );
};


export default Index;