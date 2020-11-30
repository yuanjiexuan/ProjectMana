import service from ".././../src/utils/requset";
import '../mock/mockdatamodule.js';
// 请求接口
export function GetmoduleList(data){
    return service.request({
        url: "/modulelist",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function AddmoduleList(data){
    return service.request({
        url: "/moduleadd",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function DelemoduleList(data){
    return service.request({
        url: "/moduledele",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function SearchmoduleList(data){
    return service.request({
        url: "/modulesearch",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function EditmoduleList(data){
    return service.request({
        url: "/moduleedit",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}