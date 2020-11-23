import service from ".././../src/utils/requset";
import '../mock/mockdataorgan.js'
// 请求接口
export function OrganList(data){
    return service.request({
        url: "/organList",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function OrganListAdd(data){
    return service.request({
        url: "/organListAdd",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function OrganListDele(data){
    return service.request({
        url: "/organListDele",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function OrganListSerch(data){
    return service.request({
        url: "/organListSerch",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function OrganListEdit(data){
    return service.request({
        url: "/organListEdit",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}