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
export const Get = () => {

}
export const Put = () => {

}
export const Delete = () => {

}