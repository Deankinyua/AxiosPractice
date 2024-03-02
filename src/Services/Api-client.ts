import axios, { CanceledError, AxiosError }  from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 6000,
})

export { CanceledError , AxiosError }