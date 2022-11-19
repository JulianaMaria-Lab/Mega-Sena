import styled from 'styled-components';

export const EstimativaSld = styled.div`
    font-size: 20px;
    color:  ${props => props.theme.fontColor};
    display:flex;
    align-items: flex-start;
    padding-top: 3px;
    background: ${props => props.theme.backgroundColor};
    height:100vh;
`;

export const DataSld = styled.div`
    font-size: 20px;
    float: left;
    max-width: 200px;
`;

export const PremioSld = styled.div`
    font-size: 50px;
    display: flex;
    color: ${props => props.theme.fontColor};
    align-items: flex-start;
    margin-left: 10px;
`;