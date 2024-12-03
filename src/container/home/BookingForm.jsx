import axios from 'axios';
import { Form, Select, DatePicker } from "antd";
import { Option } from "antd/es/mentions";
import { TbMapSearch } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import Primarybtn from "../../components/buttons/Primarybtn";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import dayjs from 'dayjs'; // Import dayjs to format and compar
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";


const BookingForm = () => {
    const navigate = useNavigate()
    const [bus, setBus] = useState([]);
    const [filterBuses, setFilterBuses] = useState([]);
    console.log('filterBuses',filterBuses)
    const [form] = Form.useForm();



    useEffect(() => {
        async function fetchBusData() {
            try {
                const response = await axios.get('public/jsonData/busList.json');
                setBus(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchBusData();
    }, []);



    const onFinish = (values) => {
        const { from, to, date } = values;
        const formattedDate = dayjs(date).format('D MMMM'); // Format to "9 November" for comparison
    
        const result = bus.filter((busItem) =>
            busItem.from === from &&
            busItem.to === to &&
            busItem.start_date === formattedDate // Compare with "9 November" format
        );
        console.log('result',result);
        setFilterBuses(result);
        if(result.length === 0){
            navigate('/not-found')
        }else{
            navigate(`/${from}/${to}`, { state: { buses: result } });
        }
        form.resetFields()
    };

return (
    <>
        <Form
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            name="home"
            onFinish={onFinish} // Use onFinish to handle form submission
            className="bg-white px-4 rounded-md py-6"
        >
            <Form.Item
                label={<span className="flex items-center space-x-2"><TbMapSearch className="text-primary mr-2" /> From </span>}
                className="-mt-3"
                rules={[{ required: true, message: 'Please select your From location!' }]}
                name={'from'}
            >
                <Select
                    showSearch={true}
                    optionFilterProp="children"
                    placeholder="Select Your From"
                >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="Madaripur">Madaripur</Option>
                    <Option value="Borishal">Borishal</Option>
                    <Option value="Khulna">Khulna</Option>
                    <Option value="Cumilla">Cumilla</Option>
                    <Option value="Tangail">Tangail</Option>
                    <Option value="Sylhet">Sylhet</Option>
                    <Option value="8">Rangpur</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label={<span className="flex items-center "> <IoLocation className="text-primary mr-2" /> From</span>}
                className="-mt-3"
                rules={[{ required: true, message: 'Please select your To location!' }]}
                name={'to'}
            >
                <Select
                    showSearch={true}
                    optionFilterProp="children"
                    placeholder="Select Your To"
                >
                    <Option value="Dhaka">Dhaka</Option>
                    <Option value="Madaripur">Madaripur</Option>
                    <Option value="Borishal">Borishal</Option>
                    <Option value="Khulna">Khulna</Option>
                    <Option value="Cumilla">Cumilla</Option>
                    <Option value="Tangail">Tangail</Option>
                    <Option value="Sylhet">Sylhet</Option>
                    <Option value="8">Rangpur</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label={<span className="flex items-center "> <FaRegCalendarAlt className="text-primary mr-2" /> Date</span>}
                className="-mt-3 w-full"
                rules={[{ required: true, message: 'Please select your Date' }]}
                name='date'
            >
                <DatePicker className="w-full" format="D MMMM" />
            </Form.Item>
            <div>
                <Primarybtn htmlType="submit" title="SEARCH"  />
            </div>
        </Form>
       
    </>
);
};

export default BookingForm;