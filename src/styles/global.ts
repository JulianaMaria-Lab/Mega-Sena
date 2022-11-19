
import styled from 'styled-components';

export const GlobalStyle= styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }      
    html, body {
        height: 100%;
        background: ${props => props.theme.backgroundColor};
    }
    body {
        margin: 0;
        background: ${props => props.theme.backgroundColor};
    }

`