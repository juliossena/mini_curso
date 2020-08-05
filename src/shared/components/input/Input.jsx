import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Input = ({ value, onChange, type }) => (
  <Container
    value={value}
    onChange={onChange}
    type={type}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
