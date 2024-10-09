import MenuBar from "../../layouts/MenuBar";
import TopNavbar from "../../layouts/TopNavbar";
import BookingForm from "./BookingForm";
import Offer from "./Offer";
import Support from "./Support";

const Home = () => {
    return (
        <div className="relative">
            <TopNavbar />
            <div className="bg-primary py-6 px-4">
              <BookingForm/>
            </div>
            <Support/>
            <Offer/>
            <MenuBar/>
        </div>
    );
};

export default Home;