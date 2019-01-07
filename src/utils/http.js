import axios from "axios"


import * as constant from '../constant'


let instance = axios.create({
    baseURL: constant.ApiUrl.BaseUrl,
    responseType: 'json',
    transformRequest: [function (data) {

        if (data && data.constructor && data.constructor.name == "FormData") {
            return data;
        }
        let newData = "";
        for (let k in data) {
            newData +=
                encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) + "&";
        }
        return newData;
    }],
    withCredentials: true,
})



instance.interceptors.request.use(async (config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
}, err => Promise.reject(err))


instance.interceptors.response.use(response => Promise.resolve(response.data), err => {
    if(err&err.response){
       
    }
  
    return Promise.reject(err)
})


export default instance;