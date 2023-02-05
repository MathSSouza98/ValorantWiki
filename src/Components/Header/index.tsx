import React from 'react';
import * as S from './styles';
import {
    AiOutlineSearch,
} from 'react-icons/ai'
const Header: React.FC = () => {

    return(
        <S.Container>
            <S.MenuBtn>
                {/* <S.LogoImg src={Logo}/> */}
            </S.MenuBtn>

            <a href='/'>Home</a>

            <a href='/agents'>Agentes</a>
            
            <S.Title>
                <p>Valorant Wiki</p>
            </S.Title>
            
            <a href='/guns'>Armas</a>

            <a href='/maps'>Mapas</a>
            <S.SearchBar>
                <S.SearchBtn>
                    <AiOutlineSearch 
                    size={20}
                    color='white'
                    />
                </S.SearchBtn>
                    
                <S.Search 
                    type='text'
                    placeholder='Pesquisar arma ou agente'
                    />
            </S.SearchBar>    
        </S.Container>
    );
};

export default Header;