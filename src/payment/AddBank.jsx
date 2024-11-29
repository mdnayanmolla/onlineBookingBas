import { useParams } from 'react-router-dom';
import TopNavbar from '../layouts/TopNavbar';
import qrCode from "../static/img/qrcode.png";
import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AddBank = () => {
    const [bankData, setBankData] = useState(null);
    const { id } = useParams(); // Get the 'id' from the route
    console.log('Selected ID:', id);  // Debugging: Check the 'id' value
    // console.log('bankData',bankData)
    useEffect(() => {
        const fetchBankData = async () => {
            try {
                // Fetch the bank data from the correct path in the public folder
                const response = await axios.get('/jsonData/paymentBank.json'); // Correct root path for public folder
                // if (Array.isArray(response.data)) {
                    // Use toString() if id is a number in the JSON file
                    const foundBank = response.data.find(bank => bank.id.toString() === id);
                    if (foundBank) {
                        setBankData(foundBank);
                    } else {
                        console.error(`Bank with ID ${id} not found.`);
                    }
                // } else {
                //     console.error("Response data is not an array:", response.data);
                // }
            } catch (error) {
                console.error("Error fetching bank data:", error);
            }
        };

        fetchBankData();
    }, [id]);

    // If bankData is not yet available, show a loading state
    if (!bankData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TopNavbar title='Payment' />
            <div className="bg-white px-4 rounded-md mx-4 my-4">
                <div className="py-6 flex">
                    <div className="h-[70px] w-[70px]">
                        <img src={qrCode} alt="QR Code" className="w-full" />
                    </div>
                    <div className="px-4 w-full">
                        <h4 className="text-[#444]">{bankData.bank_name}</h4>
                        <div className="grid grid-cols-2 w-full gap-4">
                            <p className="justify-self-start">Journey Start</p>
                            <p className="justify-self-end">{bankData.journey_start}</p>
                            <p className="justify-self-start -mt-4">From - To</p>
                            <p className="justify-self-end -mt-4">{bankData.from_to}</p>
                            <p className="justify-self-start -mt-4">Pickup Point</p>
                            <p className="justify-self-end -mt-4">{bankData.pickup_point}</p>
                            <p className="justify-self-start -mt-4">Seat No.</p>
                            <p className="justify-self-end -mt-4">{bankData.seat_no}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white px-4 rounded-md mx-4 my-4">
                <p className='flex justify-between'>
                    <span>Total Payable USD</span>
                    <span className='text-primary font-semibold'>$70</span>
                </p>
                <p className='flex justify-between'><span>Card Number</span> <img src={bankData.img} alt="Card" /></p>
                <Form name="payment" layout="vertical" className="w-full">
                    <Form.Item>
                        <Input placeholder="Enter your card number" />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AddBank;
