import PropTypes from 'prop-types';
const Card = ({ children, bg = 'bg-gray-300' }) => {
  return (
    <div
      className={`${bg} p-6 rounded-lg  shadow-sm shadow-green-50 flex flex-col items-start border-2 border-gray-50 transition-all`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
};

export default Card;
