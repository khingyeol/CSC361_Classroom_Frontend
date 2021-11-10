import { server, api_class } from '../constants';
import httpClient from '../httpClient';

export const getAllClass = async () => {
    return await httpClient.get(server.CLASS_URL+api_class.GET_ALL);
};
