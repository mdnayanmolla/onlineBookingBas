
import Primarybtn from "../components/buttons/Primarybtn";
import TopNavbar from "../layouts/TopNavbar";
import { Divider, Form, Input } from "antd";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <TopNavbar title={"Create an account"} />
            <div className="pt-8 px-6">
                <Form
                    name="login"
                    layout="vartical"
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        className="-mt-5"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Mobaile Number" />
                    </Form.Item>
                    <Form.Item
                        label="Mobile Number"
                        name="phone"
                        className="-mt-5"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Mobaile Number" />
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="user_name"
                        className="-mt-5"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="User Name" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        className="-mt-5"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="confirm_password"
                        className="-mt-5"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <div>
                        <Link to="/verification">
                           <Primarybtn title={'CREATE AN ACCOUNT'} />
                        </Link>
                        
                    </div>
                </Form>
                <p className="text-center pt-3 text-[14px] text-[#444"><span>By signing up you agree to our Privacy Policy and Terms.</span></p>
                <div className="px-16 -py-2">
                    <Divider
                        style={{
                            borderColor: '#dee2e6',
                        }}
                    >
                        <span className="font-normal"> OR</span>
                    </Divider>
                </div>
                <div className="space-y-4">
                    <button className="bg-white border border-blue-600 px-6 w-full py-3 text-[14px] rounded-xl text-blue-600 flex items-center justify-center space-x-4"><FaGooglePlusG className="text-xl" /> <span>SIGN UP WITH GOOGLE</span>
                    </button>
                    <button className="bg-white border border-primary px-6 w-full py-3 text-[14px] rounded-xl text-primary flex items-center justify-center space-x-4"><TiSocialFacebook className="text-xl" />
                        <span>SIGN UP WITH FACEBOOK</span>
                    </button>
                    {/* <WhiteBtn title={'LOGIN WITH FACEBOOK'}></WhiteBtn> */}
               </div>
            </div>
        </div>
    );
};

export default SignUp;