import PropTypes from 'prop-types';

const AnimateButton =({btnTitle,btnIcon})=>{
    return (
        <button className="w-full border bg-primary flex items-center justify-between px-4 py-3 rounded-tl-2xl rounded-br-2xl text-white hover:bg-primary-hover duration-500">
        {btnTitle}
        {btnIcon}
      </button>
    );
};

AnimateButton.propTypes = {
    btnTitle: PropTypes.obj,
    btnIcon: PropTypes.obj
  };
export default AnimateButton;