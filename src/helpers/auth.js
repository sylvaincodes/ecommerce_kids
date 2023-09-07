import { v4 as uuidv4 } from "uuid";

export const setToken = (values) => {
    sessionStorage.setItem('token', JSON.stringify(uuidv4()));
    sessionStorage.setItem('user', JSON.stringify(values));
}

export const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}

export const insertUserAdresse = (values) => {
    let array = [];
    let newArray = array.concat(values);
    sessionStorage.setItem('adresse', JSON.stringify(newArray));
}

export const insertUserPayment = (values) => {
    let array = [];
    let newArray = array.concat(values);
    sessionStorage.setItem('Payment', JSON.stringify(newArray));
}

export const getUserAdresse = (values) => {
    const adresse = sessionStorage.getItem('adresse');
    const userAdresse = JSON.parse(adresse);
    return userAdresse;
}