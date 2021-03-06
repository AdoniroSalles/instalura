import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

// css reset
// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle` 
    * {
        box-sizing: border-box;
    }

    ${normalize}
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamily};
    }

/* Full height layout  - deixa o rodape no final da tela mesmo q seja grande */
    html, body {
        display: flex;
        min-height: 100vh;
        width: 100%;
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`;
