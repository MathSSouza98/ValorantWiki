import React from "react";
import {
    MapsCard,
    Header,
    
} from '../../Components/Index'

import * as S from "./styles";


const Maps: React.FC = () => {
   

    return (
        <S.Container>
         <Header />
        <MapsCard />
        </S.Container>
    );
}

export default Maps;