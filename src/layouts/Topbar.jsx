

const Topbar = () => {
    const toggleSidebar = () => {
        console.log('hello, I am clicked');
    };

    return (
        <div onClick={toggleSidebar} className="bg-green-600">
            Click Me
        </div>
    );
};

export default Topbar;