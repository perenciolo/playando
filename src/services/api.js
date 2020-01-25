import axios from 'axios';

const KEY = 'AIzaSyAJc5_PBgh_syK4VdXQcABDkp-V2GZvEec';

export const params = {
  part: 'snippet',
  maxResults: 4,
  key: KEY
};

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params
});

export default api;
