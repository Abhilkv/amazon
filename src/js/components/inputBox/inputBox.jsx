import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const InputBox = (props) => {
  const { fieldName, inputHandler, placeHolder, type, value, dataType } = props;
  const FieldType = type === 'text' ? 'input' : 'textarea';

  const handleInput = (event) => {
    const { value, name } = event.target;
    inputHandler(value, name, dataType);
  };

  return (
    <FieldType
      name={fieldName}
      type={type}
      onChange={handleInput}
      placeholder={placeHolder}
      className={`${styles.inputBox} ${type === 'address' && styles.description}`}
      value={value}
    />
  );
};

InputBox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
  dataType: PropTypes.string
};

InputBox.defaultProps = {
  type: 'text',
  dataType: 'string'
};

export default InputBox;
