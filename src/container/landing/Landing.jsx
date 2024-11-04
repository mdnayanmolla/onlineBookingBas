import { Link } from 'react-router-dom';
import Primarybtn from '../../components/buttons/Primarybtn';
import WhiteBtn from '../../components/buttons/WhiteBtn';
import ladingImg from '../../static/img/landing.svg';

const Landing = () => {
    const toggleSidebar = () => {
        console.log('hello, I am clicked');
    };

    return (
        <div className="h-screen py-6 px-4">
            <div className="h-1/2">
                <img className="h-full w-full" src={ladingImg} alt="" />
            </div>
            <div className="h-1/2 flex flex-col justify-between">
                <div className="text-center space-y-2">
                    <h3 className="text-[#212529]">Start by creating an account.</h3>
                    <p>I m an early bird and I m a night owl, so I m wise and I have worms.</p>
                </div>
                <div className="space-y-4">
                    <p onClick={toggleSidebar}> click me</p>
                    <div>
                        <Primarybtn  title="CREATE AN ACCOUNT" />
                    </div>
                    <div>
                        <Link to="/signin">
                            <WhiteBtn title="SIGN IN" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
