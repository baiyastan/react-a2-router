import axios from "axios";

const apeClient = axios.create({
    baseURL: "https://dummyjson.com", 
})

export default apeClient
