import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Content-Type": "application/json",
    }
})

export const createProduct = async (product) => {
    const reponse = await api.post('/product/', product);
    return reponse.data;
}

export const getAllProduct = async () => {
    const reponse = await api.get('/product/');
    return reponse.data;
}

export const getProductById = async (id) => {
    const reponse = await api.get('/product/' + id);
    return reponse.data;
} 