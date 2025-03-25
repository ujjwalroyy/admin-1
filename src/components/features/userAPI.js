import axios from 'axios'

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUserData = async () => {
    const response = await axios(API_URL)
    return response
    
}