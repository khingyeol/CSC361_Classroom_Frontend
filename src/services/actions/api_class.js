import { server, api_class, api_post } from '../constants';
import httpClient from '../httpClient';

export const getAllClass = async () => {
    return await httpClient.get(server.CLASS_URL+api_class.GET_ALL);
};

export const getfromClass = async (id) => {
    return await httpClient.get(server.CLASS_URL+api_class.GET+`/${id}`)
}

export const getTodo = async (values) => {
    return await httpClient.post(server.CLASS_URL+api_class.ASM_ALL, values);
}


export const postPublish = async (values) => {
    return await httpClient.post(server.CLASS_URL+api_class.PUBLISH, values);
}