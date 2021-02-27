import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const TextStyleVariantsMap = {

     smallestException: css`
     font-size  : ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
     font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
     line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
     
     `,
     paragraph1: css`
     font-size  : ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
     font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
     line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
     
     `

}

const TextBase = styled.span`
     ${(props) =>  TextStyleVariantsMap[props.variant] }

`

//passa a tag html e os textos
// as muda a tag do component
export default function Text({ tag, variant, children }) {
     return (
          <TextBase
               as={tag}
               variant={variant} >
               { children}
          </TextBase>
     );
}

Text.propTypes = { 
     tag: PropTypes.string.isRequired,
     variant: PropTypes.string.isRequired,
     children: PropTypes.string.isRequired
}

Text.defaultProps = {
     tag: 'span',
     variant: 'paragraph1'
}