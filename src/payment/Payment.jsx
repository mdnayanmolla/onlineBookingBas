import { Form, Input, Radio } from "antd";
import TopNavbar from "../layouts/TopNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [selected, setSelected] = useState(null);
    const [paymentBank, setPaymentBank] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPaymentBank() {
            try {
                const response = await axios.get('public/jsonData/paymentBank.json');
                setPaymentBank(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchPaymentBank();
    }, []);

    // Simplified function to handle the bank selection and navigation
    const handlePaymentbank = (bankId) => {
        setSelected(bankId);
        navigate(`/add-bank/${bankId}`);
    };

    return (
        <div>
            <TopNavbar title="Payment" />
            <div className="flex px-4 bg-white rounded-lg py-6 mx-4 my-4">
                <div className="flex-1">
                    <p className="text-[#899ba6] text-[12px]">GOING FROM</p>
                    <p>LUDHIANA</p>
                </div>
                <div className="flex-1">
                    <p className="text-[#899ba6] text-[12px]">GOING TO</p>
                    <p>GOA</p>
                </div>
            </div>
            <div className="px-4 bg-white rounded-lg py-6 mx-4 my-4">
                <p className="text-[12px] text-primary">PICKUP FROM</p>
                <p>Model Towm, Ludhiana - 8:15 PM</p>
                <p className="text-[12px] text-primary mt-4">DROPPING AT</p>
                <p>Goa Mall Road - 7: 00 AM</p>
            </div>
            <div className="mx-4 relative">
                <Form>
                    <Input className="relative border-transparent py-2 hover:border-transparent" placeholder="Enter Voucher Code" />
                    <button className="absolute top-1 right-2 text-white bg-primary px-2 flex justify-start items-center rounded-md py-1">Apply</button>
                </Form>
            </div>

            <div className="px-4 bg-white rounded-lg py-6 mx-4 my-4">
                <h4 className="text-[#444] ">Traveller’s Info.</h4>
                <div className="grid grid-cols-2 w-full  gap-4">
                    <p className="justify-self-start">Passenger</p>
                    <p className="justify-self-end ">Joan Rase</p>
                    <p className="justify-self-start -mt-4">Ticket Number</p>
                    <p className="justify-self-end -mt-4">1313</p>
                    <p className="justify-self-start -mt-4">Seat No</p>
                    <p className="justify-self-end -mt-4">C1 C2 C3</p>
                    <p className="justify-self-start text-black"><strong>Amount Paid</strong></p>
                    <p className="justify-self-end  text-primary font-semibold">$700</p>
                </div>
            </div>

            <div className="px-4 bg-white rounded-lg py-4 mx-4 mb-4">
                {paymentBank.map((bank) => (
                    <div
                        key={bank.id}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition mt-4 ${selected === bank.id ? 'text-red-600 border-red-600' : 'border-gray-300'}`}
                        onClick={() => handlePaymentbank(bank.id)} // Call navigate when clicked
                    >
                        <Radio
                            checked={selected === bank.id}
                            onChange={() => setSelected(bank.id)}
                            className="mr-4 custom-radio"
                        />
                        <div className="w-full">
                            <p className="font-medium text-primary flex justify-between">
                                {bank.bank_name}
                                <img src={bank.img} alt={bank.bank_name} className="h-[15px] w-[20px]" />
                            </p>
                            <p className="text-sm text-gray-500">
                                Pay From {bank.bank_name} Account Using {bank.bank_name} Payment Gateway
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Payment;
