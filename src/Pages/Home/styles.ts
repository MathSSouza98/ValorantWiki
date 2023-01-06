import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    color: antiquewhite;
    background-color: ${props => props.theme.colors.secondary};

    

`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;