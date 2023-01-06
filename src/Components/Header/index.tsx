import React from 'react';
import * as S from './styles';
import Logo from '../../Assets/valorant-logo.svg'
import {
    AiOutlineSearch,
} from 'react-icons/ai'
const Header: React.FC = () => {

    return(
        <S.Container>
            <S.MenuBtn>
                <S.LogoImg src={Logo}/>
            </S.MenuBtn>
            <a href='/agents'>Agentes</a>
            
            <S.Title>
                <a href=''>Valorant Wiki</a>
            </S.Title>
            
            <a href='/guns'>Armas</a>
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