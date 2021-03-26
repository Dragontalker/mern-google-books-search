import axios from 'axios';

const fetchData = (name) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
};

export default fetchData;