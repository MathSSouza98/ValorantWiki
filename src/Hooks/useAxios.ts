import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export const useAxios = <T> (
    config: AxiosRequestConfig<any>,
    loadOnStart:boolean = true
):  [boolean, T | undefined, string, () => void] => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');

    useEffect(() =>{
        if (loadOnStart) sendRequest();
    },[]);

    const request = () => {
        sendRequest();
    }

    const sendRequest = () => {
        setLoading(true);

        axios(config).then(res => {
            setError('');
            setData(res.data);
        }).catch(error => {
            setError(error.message)
        }).finally(() => setLoading(false));
    };

    return[loading, data, error, request];
};