import axios from 'axios';

const KEY = 'AIzaSyA48_sb5T6C7xyqBJC42aRD4aLtB51U4DE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});