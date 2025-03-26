import axios from 'axios'

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUserData = async () => {
    const response = await axios(API_URL)
    return response
    
}

const PRODUCTS_API = "https://fakestoreapi.com/products";

export const fetchProductsData = async () => {
    const response = await axios(PRODUCTS_API)
    return response;
}

