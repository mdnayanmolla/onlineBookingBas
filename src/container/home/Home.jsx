import { Form, Select } from "antd";
import TopNavbar from "../../layouts/TopNavbar";
import { Option } from "antd/es/mentions";


const Home = () => {
    return (
        <div>
            <TopNavbar/>
            <div className="bg-primary py-5 px-4">
                <Form 
                name="home"
                 layout="vartical"
                 className="bg-white px-4"
                >
                 <Form.Item>
                    <Select
                      showSearch
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
                </Form>
            </div>

        </div>
    );
};

export default Home;