import React, { useEffect, useState } from 'react';
import * as S from './styles'
import { useAxios } from '../../Hooks/useAxios';

export type MapsType = {
    uuid: string,
    displayName: string,
    splash: string
}



const MapsCard: React.FC = () => {

    const [loading, data, error, request] = useAxios<MapsType>({method: 'GET', url: 'https://valorant-api.com/v1/maps'}) 

    if (loading) return <p>Loading ...</p>

    if (error !== '') return <p>{error}</p>;

    if (!data) return <p>Data was null</p>

    console.log(data.displayName)
    return(

            
        <S.Container>
            <S.ImgContainer 
            />
        </S.Container>
    );
};

export default MapsCard;