import {service} from "../utils/requset";
import '../../mock/mockdatamodule.js';
// 请求接口
export function Getmodule(data){
    return service.request({
        url: "/module/findAllModule",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
//带条件查询接口
export function GetmoduleList(data){
    return service.request({
        url: "/module/findModuleList",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function AddmoduleList(data){
    return service.request({
        url: "/module/createModule ",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function DelemoduleList(data){
    return service.request({
        url: "/module/deleteModule",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function SearchmoduleList(data){
    return service.request({
        url: "/module/findModule",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}

export function EditmoduleList(data){
    return service.request({
        url: "/module/updateModule",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
// 根据查询对象按分页查询模块列表
export function FindModulePage(data){
    return service.request({
        url: "/module/findModulePage ",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}