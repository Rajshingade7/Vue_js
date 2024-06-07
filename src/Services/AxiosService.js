import axios from 'axios';
const BASE_URL='https://fundoonotes.incubation.bridgelabz.com/api/';
export const Post = async (url, data, config) => {
    try {
        const response = await axios.post(BASE_URL+url, data, config);
        return response.data;
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