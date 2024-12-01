import { Form, Input } from "antd";
import MenuBar from "../../layouts/MenuBar";
import TopNavbar from "../../layouts/TopNavbar";
import profileImg from "../../static/img/profile.jpg"
import TextArea from "antd/es/input/TextArea";
import Primarybtn from "../../components/buttons/Primarybtn";

const Account = () => {
    return (
        <div className="relative mb-32">
            <TopNavbar title="My Profile" />
            <div className="bg-[#f8f9fa] px-4 py-4">
                <div className="flex justify-center">
                    <img className="h-[70px] w-[70px] rounded-full flex justify-center" src={profileImg} alt="" />
                </div>
                <div>
                    <Form
                        layout="vertical"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Form.Item
                            label={<span className="text-[12px]">User Name</span>}
                        >
                            <Input placeholder="User Name" />
                        </Form.Item>
                        <Form.Item
                            className="-mt-3"
                            label={<span className="text-[12px]">Mobile Number</span>}
                        >
                            <Input placeholder="Mobile Number" />
                        </Form.Item>
                        <Form.Item
                            className="-mt-3"
                            label={<span className="text-[12px]">Email</span>}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            className="-mt-3"
                            label={<span className="text-[12px]">Addres</span>}
                        >
                            <TextArea rows={2} placeholder="Enter your description here" />
                        </Form.Item>

                        <Primarybtn title={"UPDATE PROFILE"}/>
                    </Form>
                </div>
            </div>

            <MenuBar />
        </div>
    );
};

export default Account;
