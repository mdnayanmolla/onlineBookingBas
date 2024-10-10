
import { Form, Select,DatePicker } from "antd";
import { Option } from "antd/es/mentions";
import { TbMapSearch } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import Primarybtn from "../../components/buttons/Primarybtn";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const BookingForm = () => {
    return (
      <>
          <Form
                    layout="vertical"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name="home"
                    className="bg-white px-4 rounded-md py-6"
                >
                    <Form.Item
                        label={<span className="flex items-center space-x-2"><TbMapSearch className="text-primary mr-2"/> From </span>}
                        className="-mt-3"
                   >
                        <Select
                            showSearch={true}
                            optionFilterProp="children"
                        >
                            <Option>Dhaka</Option>
                            <Option>Madaripur</Option>
                            <Option>Borishal</Option>
                            <Option>Khulna</Option>
                            <Option>Cumilla</Option>
                            <Option>Tangail</Option>
                            <Option>Sylhet</Option>
                            <Option>Rangpur</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                       label={<span className="flex items-center "> <IoLocation  className="text-primary mr-2"/> Form</span>}
                        className="-mt-3"
                       >
                        <Select
                           showSearch={true}
                            optionFilterProp="children"
                        >
                            <Option>Dhaka</Option>
                            <Option>Madaripur</Option>
                            <Option>Borishal</Option>
                            <Option>Khulna</Option>
                            <Option>Cumilla</Option>
                            <Option>Tangail</Option>
                            <Option>Sylhet</Option>
                            <Option>Rangpur</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                       label={<span className="flex items-center "> <FaRegCalendarAlt   className="text-primary mr-2"/> Date</span>}
                        className="-mt-3 w-full"
                       >
                       <DatePicker className="w-full"/>
                    </Form.Item>
                    <div>
                       <Link to="/listing">
                        <Primarybtn title="SEARCH"/>
                       </Link>
                    </div>

                </Form>
      </>
    );
};

export default BookingForm;