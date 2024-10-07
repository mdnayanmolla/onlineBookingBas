import PropTypes from 'prop-types';
const WhiteBtn = ({title}) => {
    return (
       <button className="border border-primary rounded-[10px] text-primary bg-white px-4 py-3 w-full">{title}</button>
    );
};
WhiteBtn.propTypes = {
    title: PropTypes.obj,
  };
export default WhiteBtn;