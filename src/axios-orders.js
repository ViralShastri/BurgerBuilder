import axios from "axios";

const urlInstance = axios.create({
    baseURL: "https://burgerbuilder-miniproject.firebaseio.com/",
});

export default urlInstance;
