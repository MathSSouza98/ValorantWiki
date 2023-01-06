import React from "react";
import {
    AgentsCard,
    Header,
    
} from '../../Components/Index'

import * as S from "./styles";


const Agents: React.FC = () => {
   

    return (
        <S.Container>
         <Header />
        <AgentsCard />
        </S.Container>
    );
}

export default Agents;