/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
    background-color: transparent;
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};

`;
const ButtonDefault = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;
const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${(props) => props.theme.borderRadius};
    transition : ${(props) => props.theme.transition};

    ${(props) => {
    // eslint-disable-next-line max-len
    // console.log('Button',props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`))
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
    &:hover,
    &:focus {
        opacity: 0.5;
    }

    //media querys
  ${breakpointsMedia({
    xs: css`
         ${TextStyleVariantsMap.smallestException} 
        `,
    md: css`
        padding: 12px 43px;
         ${TextStyleVariantsMap.paragraph1} ;
        `,
  })}

  &:disabled{
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  ${propToStyle('margin')}
  ${propToStyle('display')}

    
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper
      as={tag}
      href={href}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
