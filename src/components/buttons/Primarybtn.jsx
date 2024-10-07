// import React from 'react';
import PropTypes from 'prop-types';
const Primarybtn = ({title}) => {
    return (
        <button className="border border-primary rounded-[10px] text-white bg-primary px-4 py-3 w-full">{title}</button>
    );
};
Primarybtn.propTypes = {
    title: PropTypes.obj,
  };

export default Primarybtn;