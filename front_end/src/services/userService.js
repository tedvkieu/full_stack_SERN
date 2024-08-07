import axios from '../axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {
        email: userEmail,
        password: userPassword,
    });
};

const getAllUsers = (inputId) => {
    ///api/get-all-user?id=All
    return axios.get(`/api/get-all-user?id=${inputId}`);
};

export { handleLoginApi, getAllUsers };
