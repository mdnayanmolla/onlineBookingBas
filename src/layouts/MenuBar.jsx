import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoTicketSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const MenuBar = () => {
    return (
        <div className="bg-primary py-2 fixed bottom-0 mb-2 left-4 right-4 w-auto rounded-lg">
            <div className="flex justify-between py-2 items-center px-5">
                <NavLink
                    exact
                    to="/home"
                    className={({ isActive }) =>
                        isActive
                            ? "flex flex-col items-center text-[#ffc107]"
                            : "flex flex-col items-center text-white"
                    }
                >
                    <IoHome className="text-2xl " /> Home

                </NavLink>
                <NavLink
                    exact
                    to="/tickets"
                    className={({ isActive }) =>  isActive  ? "flex flex-col items-center text-[#ffc107]"
                            : "flex flex-col items-center text-white"}
                >
                    <IoTicketSharp className="text-2xl " />Tickets
                </NavLink>

                <NavLink
                    exact
                    to="/notification"
                    className={({ isActive }) =>
                        `relative ${isActive ? "flex flex-col items-center text-[#ffc107]" : "flex flex-col items-center text-white"}`
                    }
                >
                    <IoNotifications className="text-2xl " />
                    Notification

                    <span className="h-4 w-4 absolute -top-1 right-5 flex justify-center items-center bg-white text-primary text-sm rounded-full">3</span>
                </NavLink>
                <NavLink
                    exact
                    to="/account"
                    className={({ isActive }) =>
                        isActive
                            ? "flex flex-col items-center text-[#ffc107]"
                            : "flex flex-col items-center text-white"
                    }
                >
                    <FaRegUser className="text-2xl " />
                    Account
                </NavLink>
            </div>
        </div>
    );
};

export default MenuBar;