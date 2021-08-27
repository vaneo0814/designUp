import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { defaultTheme, typeScale } from '../../utils';

const VARIANTS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    TERTIARY: 'tertiary',
  };
  
  const SIZES = {
    DEFAULT: 'default',
    SMALL: 'small',
    LARGE: 'large',
  };

const dropShadow = 'drop-shadow(0px 5px 5px  rgba(0, 0, 255, 0.25));';
const tertiaryDropShadow = 'drop-shadow(0px 4px 3px rgba(0, 0, 255, 0.7));';

const StyledButton = styled.button`
  border-radius: 50px;
  display: inline-block;
  min-width: 75px;
  cursor: pointer;
  font-family: ${defaultTheme.buttonFont};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 12px 16px;
  font-size: ${typeScale.header5};

  ${(props) =>
    props.variant === VARIANTS.PRIMARY &&
    css`
      background-color: ${defaultTheme.primaryColor};
      border: 1px solid ${defaultTheme.primaryColor};
      color: ${defaultTheme.textColorOnPrimary};
      &:hover {
        background-color: ${defaultTheme.primaryHover};
        color: ${defaultTheme.textPrimaryHover};
        filter: ${dropShadow};
      }
      &:focus {
        background-color: ${defaultTheme.primaryFocus};
        outline: 2px solid ${defaultTheme.focusBorder};
        outline-offset: 2px;
        color: ${defaultTheme.textPrimaryFocus};
      }
    `}
`;

const ButtonLink = StyledButton.withComponent('a');

export const Button = (props) => {
  return props.href ? (
    <ButtonLink href={props.href} {...props} />
  ) : (
    <StyledButton {...props} />
  );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
  };
  
  Button.defaultProps = {
    href: undefined,
  };
  
  export default Button;