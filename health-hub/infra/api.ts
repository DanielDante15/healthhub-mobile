import axios from "axios";
import getEnv from "./enviroment";


const {api_base_url} = getEnv()
const api = axios.create({
    baseURL: api_base_url,
});

export default api;