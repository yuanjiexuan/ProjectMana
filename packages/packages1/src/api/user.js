import service from ".././../src/utils/requset";
import '../mock/mockdatauser.js'
// 请求接口
export function UserList(data){
    return service.request({
        url: "/userList",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function DeluserList(data){
    return service.request({
        url: "/userdel",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function AdduserList(data){
    return service.request({
        url: "/useradd",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function SearchUser(data){
    return service.request({
        url: "/usersearch",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}
export function EditUser(data){
    return service.request({
        url: "/useredit",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}


