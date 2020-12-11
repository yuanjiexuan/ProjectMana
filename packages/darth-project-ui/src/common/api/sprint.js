import {service} from "../utils/requset";
// import '../../mock/mockdatasprint.js';
// 请求接口
export function GetsprintList(data){
    return service.request({
        url: "/sprint/findAllSprint",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
//根据对象查询迭代列表
export function Getsprint(data){
    return service.request({
        url: "/sprint/findSprintPage",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function AddsprintList(data){
    return service.request({
        url: "/sprint/createSprint",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function DelesprintList(data){
    return service.request({
        url: "/sprint/deleteSprint ",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function SearchsprintList(data){
    return service.request({
        url: "/sprint/findSprint",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function EditsprintList(data){
    return service.request({
        url: "/sprint/updateSprint",
        method: "post",
        data
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}