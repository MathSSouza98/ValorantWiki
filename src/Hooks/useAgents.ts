import { api } from "../api/api";
import { UseQueryResult , useQuery } from '@tanstack/react-query';
import { IAgents } from "../interfaces/IAgentes";

interface AgentsData {
    status: number,
    data: IAgents[]
}

interface AgentsUnic {
    status: number,
    data: IAgents
}

const getAgents = async ():Promise<AgentsData> => {

    const params = new URLSearchParams();

    params.append('language', 'pt-BR')
    params.append('isPlayableCharacter', true.toString())


    const respose = await api.get<AgentsData>(`/agents`, {
        params: params
    });

    return respose.data;
}

const getAgentsById = async (id: string):Promise<AgentsUnic> => {
    const respose = await api.get<AgentsUnic>(`/agents/${id}?language=pt-BR`);

    return respose.data;
}

export const useAgents = ():UseQueryResult <AgentsData> => {
    return useQuery(['agents'], () => getAgents());
}

export const useAgentsById = (id: string):UseQueryResult <AgentsUnic> => {
    return useQuery(['agents', id], () => getAgentsById(id));
}