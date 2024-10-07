import PropTypes from 'prop-types';
const WhiteBtn = ({title,icon}) => {
    return (
       <button className="border border-primary rounded-[10px] text-primary bg-[#f5f3fe] hover:bg-[#e2e6ea] px-4 py-3 w-full">{title}{icon}</button>
    );
};
WhiteBtn.propTypes = {
    title: PropTypes.obj,
    icon: PropTypes.obj,
  };
export default WhiteBtn;