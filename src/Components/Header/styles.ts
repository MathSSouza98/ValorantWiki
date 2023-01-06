import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 50px;

    padding: 20px;

    display: flex;
    
    align-items: center;

    background-color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.gray};

    justify-content: space-between;

    a{
        display: flex;
        
        align-items: center;

        color: ${props => props.theme.colors.white};

        text-decoration: none;

        font-size: 20px;
    }

`;

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchBtn = styled.button`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    background-color: rgba(255,255,255,.0);
    


`;


export const Search = styled.input`
    width: 200px;
    height: 30px;

    padding: 10px;

    border-radius: 5px;

    
    
`;

export const MenuBtn = styled.button`
    width: 30px;
    height: 30px;
    background-color: rgba(255,255,255,.0);
`;

export const LogoImg = styled.img`
    width: 30px;
    height: 30px;
`;

export const Title = styled.div`
    a{
        font-size: 26px;
    };
`;