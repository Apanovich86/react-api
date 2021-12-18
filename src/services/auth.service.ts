import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username: string, email: string, password: string) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password
    });
};

export default {
    register
};
