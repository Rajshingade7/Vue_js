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
        console.log("adding notes")
        return response.data;
    } catch (error) {
        console.error("There was an error making the POST request", error.message);
        throw error;
    }
};
export const deleteNote = (note)=>{
    const token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token
    }
    console.log("Removinng Notes...")

    return Post('notes/trashNotes',note, { headers })
  }

 
export const updateNote = (note)=>{
    const token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token
    }
    console.log("updating Note...")
    return Post('notes/updateNotes',note, { headers })
  }

    export const archiveNote = (note)=>{
    const token = localStorage.getItem('token')
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token
    }
    console.log("archiving Note...")
    return Post('notes/archiveNotes',note, { headers })
    }

    export const GetArchivedNotesList = async () => {
        const url = 'notes/getArchiveNotesList';
        try {
            const response = await Get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching archived notes list:', error);
            throw error;
        }
    };
    export const GetTrashedNotelist = async () => {
        const url = 'notes/getTrashNotesList';
        try {
            const response = await Get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching trashed notes list:', error);
            throw error;
        }
    };
    export const changeColorForNote = (note) => {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token
        };
        console.log("changing color for Note...");
        return Post('notes/changesColorNotes', note, { headers });
    };
    