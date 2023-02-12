import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.kontenbase.com/query/api/v1/21b13e9d-24af-43d0-b6b7-c13f0825275a"
})

export function setAuthorization(token) {
    if (!token) {
        delete API.defaults.headers.common;
        return;
    }
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}