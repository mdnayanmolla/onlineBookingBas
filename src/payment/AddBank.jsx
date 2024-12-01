import { useParams } from 'react-router-dom';
import TopNavbar from '../layouts/TopNavbar';
import qrCode from "../static/img/qrcode.png";
import { Col, DatePicker, Form, Input, Modal, Row } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentConfirm from './PaymentConfirm';

const AddBank = () => {
    const [bankData, setBankData] = useState(null);
    const { name } = useParams();  // This extracts the 'name' from the URL
    const [isModalVisible, setIsModalVisible] = useState(false);


    // console.log('Selected Name:', name);  // Debugging: Check the 'id' value

    const showModal = () => {
        console.log('click');
        setIsModalVisible(true);
    }
   

    // console.log('bankData',bankData)
    useEffect(() => {
        const fetchBankData = async () => {
            try {
                // Fetch the bank data from the correct path in the public folder
                const response = await axios.get('/jsonData/paymentBank.json'); // Correct root path for public folder
                // if (Array.isArray(response.data)) {
                // Use toString() if id is a number in the JSON file
                const foundBank = response.data.find(bank => bank.name.toString() === name);
                if (foundBank) {
                    setBankData(foundBank);
                } else {
                    // console.error(`Bank with ID ${name} not found.`);
                }
                // } else {
                //     console.error("Response data is not an array:", response.data);
                // }
            } catch (error) {
                console.error("Error fetching bank data:", error);
            }
        };

        fetchBankData();
    }, [name]);

    // If bankData is not yet available, show a loading state
    if (!bankData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='relative'>
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
            <div className="bg-white px-4 rounded-md mx-4 my-4 absolute top-[100%]  left-[1px] right-[1px]">
                <p className='flex justify-between pt-3'>
                    <span>Total Payable USD</span>
                    <span className='text-primary font-semibold'>$70</span>
                </p>
                <p className='flex justify-between pt-4'><span>Card Number</span> <img src={bankData.img} alt="Card" className='rounded-md mb-2' /></p>
                <Form name="payment" layout="vertical" className="w-full">
                    <Row gutter={[15, 0]}>
                        <Col span={24}>
                            <Form.Item>
                                <Input placeholder="1234 5678 9145 4589" />
                            </Form.Item>
                        </Col>
                        <Col span={18} className="-mt-4 h-full">
                            <Form.Item label="Month/Date" className="text-[#6c757d]">
                                <DatePicker
                                    format="DD      /    MM"
                                    placeholder="DD     /     MM"
                                    className="w-full"
                                    style={{ letterSpacing: '5px' }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6} className="-mt-4">
                            <Form.Item label="CVV" className="text-[#6c757d]">
                                <Input placeholder="Enter CVV" className="w-full" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <button onClick={showModal} className='bg-primary w-full py-2 text-white rounded-lg text-center my-4'>Play</button>
                </Form>
                <Modal
                    visible={isModalVisible}  // Modal visibility controlled by state
                    width={600}  // You can adjust the width as needed
                    footer={null} // Removes the footer
                    title={null} // Removes the header
                    closable={false} // Removes the close icon
                >
                    {/* Modal content */}
                    <PaymentConfirm />  {/* Displaying the CustomComponent inside the modal */}
                </Modal>
            </div>
        </div>
    );
};

export default AddBank;
