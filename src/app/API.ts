import axios from 'axios'

// TODO: Set url for socket and api when in local host

// const baseURL = 'https://server-gi.herokuapp.com/'
// const baseURL = 'https://niniesocial.herokuapp.com/'
const baseURL = 'https://niniesocial.herokuapp.com/'



const API = axios.create({ baseURL, withCredentials: true })

export default API