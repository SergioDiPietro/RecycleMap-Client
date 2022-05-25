import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

const getAllRecyclerMarkers = token => {
  return axios.get(`${API_URL}/recyclemarkers`, {
    headers: {
      authenticate: `${token}`,
    },
  });
};

const addNewRecyclerMarker = (marker, token) => {
  return axios.post(`${API_URL}/recyclemarkers`, marker, {
    headers: {
      authenticate: `${token}`,
    },
  });
};

const modifyRecyclerMarker = (id, marker, token) => {
  return axios.put(`${API_URL}/recyclemarkers/${id}`, marker, {
    headers: {
      authenticate: `${token}`,
    },
  });
};

const removeRecyclerMarker = (id, token) => {
  return axios.delete(`${API_URL}/recyclemarkers/${id}`, {
    headers: {
      authenticate: `${token}`,
    },
  });
};

export {
  getAllRecyclerMarkers,
  addNewRecyclerMarker,
  modifyRecyclerMarker,
  removeRecyclerMarker,
};