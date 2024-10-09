import safeJurny from "../../static/img/safeJurny.svg"
import bsetSupport from "../../static/img/bestcsSupport.svg"
import liveTrack from "../../static/img/liveTrack.svg"
import verifiedDrivers from "../../static/img/veryfiedDriver.svg"

const Support = () => {
    return (
        <>
            <div className="bg-[#ffc107] py-6 grid grid-cols-2 gap-5 px-4 ">
                <div className="bg-white rounded-md px-8 py-8 space-y-5">
                    <img src={safeJurny} alt="" />
                    <h5 className="text-[#444]">Safe and Hygennec <br></br>Vechicles</h5>
                </div>
                <div className="bg-white rounded-md px-8 py-8 space-y-5">
                    <img src={bsetSupport} alt="" />
                    <h5 className="text-[#444]">Best and Customar <br></br>Support</h5>
                </div>
                <div className="bg-white rounded-md px-8 py-8 space-y-5">
                    <img src={liveTrack} alt="" />
                    <h5 className="text-[#444]">Live Track Your <br></br>Journey</h5>
                </div>
                <div className="bg-white rounded-md px-8 py-8 space-y-5">
                    <img src={verifiedDrivers} alt="" />
                    <h5 className="text-[#444]">Verified Drivers  <br></br>And Vechicles</h5>
                </div>
            </div>
        </>
    );
};

export default Support;