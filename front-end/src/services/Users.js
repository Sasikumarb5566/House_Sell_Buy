import axios from 'axios';

const baseUrl = import.meta.env.SERVER_BASE_URL || 'http://localhost:4041';

export const registerUser = async( user ) => {
    return axios.post(`${baseUrl}/user/register`, user);
}

export const loginUser = async ( user ) => {
    return axios.post(`${baseUrl}/user/login`, user);
}

export const saveProperty = async( property ) => {
    return axios.post(`${baseUrl}/save/property`, property);
}

export const fetchUser = async(email) => {
    return axios.get(`${baseUrl}/fetch/user`, { params: { email } });
}

export const fetchAllUsers = async() => {
    return axios.get(`${baseUrl}/user/all`);
}

export const fetchProperty = async(email) => {
    return axios.get(`${baseUrl}/property/fetch`, { params: { email } });
}

export const likeDisLike = async( email ) => {
    return axios.post(`${baseUrl}/property/like`, email);
}

export const saveUser = async(email, formData) => {
    return axios.put(`${baseUrl}/user/profile-update`, {email, formData});
}

export const updateProperty = async(email, formData) => {
    return axios.put(`${baseUrl}/user/property-update`, {email, formData});
}