import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'



const ButtonGhost = css`
    background-color: transparent;
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};

`
const ButtonDefault = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`
export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${(props) => props.theme.borderRadius};
    transition : ${(props) => props.theme.transition};

    ${(props) => {
        // console.log('Button',props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`))
        console.log(props)
        if (props.ghost) {
            return ButtonGhost
        }
        return ButtonDefault
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
        `
    })}

    
`
