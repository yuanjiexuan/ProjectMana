import axios from "axios";
// 创建实例
const service = axios.create({
    baseURL: '/devapi',
    timeout: 5000
});
// 请求拦截
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 响应拦截
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})

const serviceLoc = axios.create({
    // baseURL: '/devapi',
    timeout: 5000
});
// 请求拦截
serviceLoc.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 响应拦截
serviceLoc.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})
export {service,serviceLoc};