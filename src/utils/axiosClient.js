import axios from "axios";
const axiosClient = axios.create({
    baseURL: "https://movie0706.cybersoft.edu.vn/api/"
});

// export const setToken = (token) =>{
//     axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`
// };

//add token cach 2 

axiosClient.interceptors.request.use((config) => {
    console.log(config);
    // console.log(localStorage.getItem("userInfo"));
    const userInfo = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    
    config.headers.Authorization = `Bearer ${userInfo && userInfo.accessToken}`;
    return config;
})

export default axiosClient;