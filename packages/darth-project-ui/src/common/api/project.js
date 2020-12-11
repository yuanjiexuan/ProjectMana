import {service} from "../utils/requset";
// import '../mock/mockdatapro.js';
// 请求接口
export function GetproList(data){
    return service.request({
        url: "/project/findAllProject",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function AddproList(data){
    return service.request({
        url: "/project/createProject",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function DeleproList(data){
    return service.request({
        url: "/project/deleteProject",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function UpdateproList(data){
    return service.request({
        url: "/project/updateProject",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function SearchproList(data){
    return service.request({
        url: "/project/findProject",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function Searchpro(data){
    return service.request({
        url: "/project/findProject",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}