import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../functions/colors';
import { Container } from './styles';

const Button = ({
  children,
  backgroundColor,
  color,
}) => (
  <Container
    backgroundColor={backgroundColor}
    color={color}
  >
    {children}
  </Container>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: colors.primary,
  color: colors.white,
};

export default Button;
