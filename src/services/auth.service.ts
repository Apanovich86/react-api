import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username: string, email: string, password: string, photo: string) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
        photo
    });
};

export default {
    register
};
