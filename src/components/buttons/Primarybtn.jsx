// import React from 'react';
import PropTypes from 'prop-types';
const Primarybtn = ({onClick,title}) => {
    return (
        <button onClick={onClick} className="border border-primary rounded-[10px] text-white bg-primary px-4 py-3 w-full">{title}</button>
    );
};
Primarybtn.propTypes = {
    title: PropTypes.obj,
    onClick: PropTypes.func,
  };

export default Primarybtn;