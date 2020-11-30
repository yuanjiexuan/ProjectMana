import service from "../utils/requset";
import '../mock/mockdataiteration.js';
// 请求接口
export function GetiterationList(data){
    return service.request({
        url: "/iterationlist",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function AdditerationList(data){
    return service.request({
        url: "/iterationadd",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function DeleiterationList(data){
    return service.request({
        url: "/iterationdele",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function SearchiterationList(data){
    return service.request({
        url: "/iterationsearch",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function EdititerationList(data){
    return service.request({
        url: "/iterationedit",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}