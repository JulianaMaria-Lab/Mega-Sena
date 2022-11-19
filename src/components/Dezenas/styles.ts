import styled from 'styled-components';

export const DezenasSld = styled.div`
    display: flex;
    padding: 10px 0px;
    align-items: flex-end;
    padding-bottom:3px;
    flex-direction: row;
    color: ${props => props.theme.dezenaColor};
    background: ${props => props.theme.backgroundColor};
`;

export const Circle = styled.div`
    background-color: ${props => props.theme.circleColor};
    color: ${props => props.theme.dezenaColor};
    font-size: 2em;
    display: block;
    text-align: center;

    margin: 0.5rem;
    height: 4rem;
    width: 4rem;
    line-height: 4rem;
    -moz-border-radius: 50%; 
    border-radius: 50%;
`;