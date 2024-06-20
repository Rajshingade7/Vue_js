import { Get, Post, Delete,Patch } from './AxiosService'

export const getAllLabels = () => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return Get('noteLabels/getNoteLabelList', { headers })
}

export const addLabels = (label) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return Post('noteLabels', label, { headers })
}

export const deleteLabels = (label) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return Delete('noteLabels/'+label+'/deleteNoteLabel', { headers })
}

export const updateLabels = (id,data) => {
  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token
  }
  return Patch(`noteLabels/${id}`, data, { headers })
}