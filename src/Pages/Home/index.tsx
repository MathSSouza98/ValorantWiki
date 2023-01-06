import React from "react";
import {
    AgentsCard,
    GunCard,
    Header,
    MapsCard,
} from '../../Components/Index'

import * as S from "./styles";


const Home: React.FC = () => {
   

    return (
        
        <S.Container>
            <Header />
            <S.Cards>
                <MapsCard />
            </S.Cards>
        </S.Container>
    );
}

export default Home;

