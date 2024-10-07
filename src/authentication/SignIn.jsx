import { Input, Form, Divider } from "antd";
import TopNavbar from "../layouts/TopNavbar";
import Primarybtn from "../components/buttons/Primarybtn";
import { Link } from "react-router-dom";
import WhiteBtn from "../components/buttons/WhiteBtn";


const SignIn = () => {
    return (
        <div className="">
            <TopNavbar />
            <div className="py-10 px-6">
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
                        label="Mobile Number"
                        name="phone"

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
                    <Link to="/forgot-password" >
                        <p className="text-end"> Forgot your password?</p>

                    </Link>
                    <div>
                        <Primarybtn title={'SIGN IN'} />
                    </div>
                </Form>
                <div className="px-16 py-8">
                <Divider
                    style={{
                        borderColor: '#dee2e6',
                    }}
                >
                   <span className="font-normal"> OR</span>
                </Divider>
                </div>
                <div>
                    <WhiteBtn title={'LOGIN WITH FACEBOOK'}></WhiteBtn>
                </div>
            </div>
        </div>
    );
};

export default SignIn;