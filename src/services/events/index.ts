import { get, post } from '../axios';

export const getEvents = async (params: {}) => {
    return await get(`/event`, {
        params
    });
}