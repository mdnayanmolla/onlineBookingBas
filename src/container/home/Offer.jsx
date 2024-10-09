
import offer1 from "../../static/img/offer1.jpg"
import offer2 from "../../static/img/offer2.jpg"
import offer3 from "../../static/img/offer3.jpg"
import offer4 from "../../static/img/offer4.jpg"

const Offer = () => {
    return (
        <>
          <div className="bg-[white] mb-24 py-6 grid grid-cols-2 gap-5 px-4 ">
            <div>
                <img src={offer1} alt=""/>
            </div>
            <div>
                <img src={offer2} alt=""/>
            </div>
            <div>
                <img src={offer3} alt=""/>
            </div>
            <div>
                <img src={offer4} alt=""/>
            </div>
          </div>
        </>
    );
};

export default Offer;