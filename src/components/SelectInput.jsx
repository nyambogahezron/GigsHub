import PropTypes from 'prop-types';

const SelectInput = ({
  name,
  value,
  handleChange,
  options,
  labelText,
}) => {
  return (
    <div className='mb-6'>
      <label htmlFor={name} className='inline-block text-lg mb-2'>
        {labelText || name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className='border border-gray-200 rounded p-2 w-full'
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  labelText: PropTypes.string,
};

export default SelectInput;