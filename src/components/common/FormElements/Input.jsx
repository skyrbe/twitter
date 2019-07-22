import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  type,
  classNames,
  formGroupClassNames,
  placeholder,
  onChange,
  value,
  showLabel = true,
  ...restProps
}) => {
  return (
    <div className={`form-group ${formGroupClassNames}`}>
      {showLabel && (
        <label htmlFor={label}>
          {placeholder || label}
        </label>
      )}
      <input
        type={type}
        className={`form-control ${classNames}`}
        id={label}
        name={label}
        placeholder={placeholder || label}
        onChange={onChange}
        value={value}
        {...restProps}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  classNames: 'form-control',
  placeholder: ''
};

Input.propTypes = {
  type: PropTypes.string,
  classNames: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
