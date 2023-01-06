import React from "react";
import {
    GunCard,
    Header,
    
} from '../../Components/Index'

import * as S from "./styles";


const Guns: React.FC = () => {
   

    return (
        <S.Container>
         <Header />
        <GunCard />
        </S.Container>
    );
}

export default Guns;