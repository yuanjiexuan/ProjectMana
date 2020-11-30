import service from ".././../src/utils/requset";
import '../mock/mockdatapro.js';
// 请求接口
export function GetproList(data){
    return service.request({
        url: "/prolist",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function AddproList(data){
    return service.request({
        url: "/proadd",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function DeleproList(data){
    return service.request({
        url: "/prodele",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function SearchproList(data){
    return service.request({
        url: "/prosearchtype",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function Searchpro(data){
    return service.request({
        url: "/prosearch",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}