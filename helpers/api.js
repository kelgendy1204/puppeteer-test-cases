import axios from 'axios';
import { getToken } from '.';

const createAPI = (baseURL, authToken, jsonAPI = false) => {
    const headersObj = {
        'X-Requested-With': 'XMLHttpRequest'
    };

    if (authToken) {
        headersObj['Authorization'] = `Bearer ${authToken.toString()}`;
    }

    if (jsonAPI) {
        headersObj['Content-Type'] = 'application/vnd.api+json';
        headersObj['Accept'] = 'application/vnd.api+json';
    }
    const instance = axios.create({
        baseURL,
        headers: {
            common: headersObj
        }
    });
    if (jsonAPI) {
        instance.interceptors.request.use(config => {
            config.headers['Content-Type'] = 'application/vnd.api+json';
            return config;
        });
    }

    return instance;
};

export async function getAPI(page) {
    const token = await getToken(page);
    return createAPI(process.env.API_URL, token, true);
}
