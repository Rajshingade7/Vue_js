import { Get,Post } from './AxiosService';

export const GetNotesList = async () => {
    const url = 'notes/getNotesList';
    try {
        const response = await Get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes list:', error);
        throw error;
    }
};

export const createNewNote = async (reqData) => {
    console.log(reqData);
    const url = 'notes/addNotes';
    const token=localStorage.getItem('token');
    let headersOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
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