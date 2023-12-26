import axios from "axios";
//create an axios instance with a custom configuration 

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '69856b8d26a149b6b02c8756cc7a8205'
    }


})