import { Input, Form, Divider } from "antd";
import TopNavbar from "../layouts/TopNavbar";
import Primarybtn from "../components/buttons/Primarybtn";
import { Link } from "react-router-dom";
// import WhiteBtn from "../components/buttons/WhiteBtn";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa6";


const SignIn = () => {
    return (
        <div className="">
            <TopNavbar title={"Sign in to your account"} />
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
                    <Link to="/verification">
                        <Primarybtn title={'SIGN IN'} />
                    </Link>
                    </div>
                </Form>
               
                <div className="px-16 py-2">
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
                    <button className="bg-white border border-primary px-6 w-full py-3 text-[14px] rounded-xl text-primary flex items-center justify-center space-x-4"><TiSocialFacebook  className="text-xl"/>
                    <span>SIGN UP WITH FACEBOOK</span> 
                    </button>
                    {/* <WhiteBtn title={'LOGIN WITH FACEBOOK'}></WhiteBtn> */}
                </div>
                
               <div className="text-center text-[14px] pt-4">
                  <span className="text-[#444]">   Not a member ? <Link to="/signup" className="text-primary">Sign Up</Link></span>
               </div>
                
            </div>
        </div>
    );
};

export default SignIn;