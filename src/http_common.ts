import axios from "axios";
//шаблон по якому відправляються запити на сервер
export default axios.create({
    // baseURL: "http://http://127.0.0.1:8000/",
    baseURL: "http://local.laravel.vpd912.com:80/",
    headers: {
        "Content-type": "application/json"
      }
});
