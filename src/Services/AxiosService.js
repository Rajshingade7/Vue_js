import axios from 'axios';
const BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api/';
export const Post = (url, data, config) => {
    try {
        return axios.post(BASE_URL + url, data, config);

    } catch (error) {
        console.error("There was an error making the POST request", error);
        throw error;
    }
};
export const Get = (url, config={}) => {
    
    try {
        const token=localStorage.getItem('token');
        const headers={
            ...config.headers,
            Authorization:`${token}`
        }
        return axios.get(BASE_URL + url, {...config,headers});
    } catch (error) {
        console.error("There was an error making the GET request", error);
        throw error;
    }
};

export const Delete = (url, config={}) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            ...config.headers,
            Authorization: `${token}`
        }
        return axios.delete(BASE_URL + url, {...config, headers});
    } catch (error) {
        console.error("There was an error making the DELETE request", error);
        throw error;
    }
}
export const Put = (url, data, config={}) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            ...config.headers,
            Authorization: `${token}`
        }
        return axios.put(BASE_URL + url, data, {...config, headers});
    } catch (error) {
        console.error("There was an error making the PUT request", error);
        throw error;
    }
};
export const Patch = (url, data, config={}) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            ...config.headers,
            Authorization: `${token}`
        }
        return axios.patch(BASE_URL + url, data, {...config, headers});
    } catch (error) {
        console.error("There was an error making the PATCH request", error);
        throw error;
    }
};