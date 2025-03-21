import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7052bb5cc18e4406b07f299be89d86dc",
    },
});


