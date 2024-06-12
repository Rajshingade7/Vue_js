import { Get } from './AxiosService';

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