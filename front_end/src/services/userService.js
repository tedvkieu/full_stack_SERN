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

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
};

export { handleLoginApi, getAllUsers, createNewUserService };
