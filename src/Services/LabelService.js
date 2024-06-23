import { Get, Post, Delete,Patch } from './AxiosService'

export const getAllLabels = () => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  console.log("calling getalllabelapi");
  return Get('noteLabels/getNoteLabelList', { headers })
}

export const addLabels = (label) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  console.log("calling add label api")
  return Post('noteLabels', label, { headers })
}

export const deleteLabels = (label) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  console.log("calling delete label api");
  return Delete('noteLabels/'+label+'/deleteNoteLabel', { headers })
}

export const updateLabels = (id,data) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  console.log("calling update label api");
  return Patch(`noteLabels/${id}`, data, { headers })
}