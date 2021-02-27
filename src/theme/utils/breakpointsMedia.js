import { css } from 'styled-components'
import { breakpoints } from '../index'

export function breakpointsMedia(cssBreakpoints) {

     const breakpointsNames = Object.keys(cssBreakpoints) //pega as chaves
     return breakpointsNames
     .filter((filter) => Boolean(cssBreakpoints[filter]))
     .map(( item ) => {
        
          return css`
          @media only screen and (min-width : ${breakpoints[item]}px){
               ${cssBreakpoints[item]}
           }
          `
     })

}