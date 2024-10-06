import PropTypes from 'prop-types';

const Button = ({btnTitle,btnIcon})=>{
    return (
        <>
          <button className="w-full border bg-primary flex items-center justify-between px-4 py-3 text-white hover:bg-primary-hover duration-500">{btnTitle}{btnIcon}</button>
        </>
    )
}
Button.propTypes = {
    btnTitle: PropTypes.obj,
    btnIcon: PropTypes.obj
  };
export default Button;