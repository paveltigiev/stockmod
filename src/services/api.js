import axios from "axios"

axios.defaults.baseURL = "/"
const instance = axios.create({})

export default instance;