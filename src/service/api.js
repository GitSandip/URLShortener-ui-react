import axios from 'axios';

const url = "http://localhost:8000";

const postLink = async (data) => {
    try {
        const response = await axios.post(`${url}/`, data);

       
        if (response && response.data && response.data.short_url) {
           
            return response.data.short_url;
        } else {
            console.error('Invalid response format:', response);
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Error message:', error.message);
        throw error; 
    }
};


export default postLink;
