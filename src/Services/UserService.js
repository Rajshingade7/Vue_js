import { Post } from './AxiosService';

export const loginUser =  (reqData) => {
    console.log(reqData);
    const url = 'user/login';
    let headersOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'token'
        }
    };
    return Post(url, reqData, headersOptions)
    .then(response => {
       
        const token = response.data.id;
        console.log(token);
        localStorage.setItem('token', token);
        return response;
    })
    .catch(error => {
        console.error("Login failed", error);
        throw error;
    });
};

export const signupUser = async (reqData) => {
    console.log(reqData);
    const url = 'user/userSignUp';
    let headersOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'token'
        }
    };
    try {
        const response = await Post(url, reqData, headersOptions);
        return response.data;
    } catch (error) {
        console.error("There was an error making the POST request", error.message);
        throw error;
    }
};

