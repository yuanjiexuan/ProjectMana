import {serviceLoc} from "../utils/requset";
import '../../mock/mockdatauser';

// 获取已添加用户列表
export function UserList(data){
    return serviceLoc.request({
        url: "/userList",
        method: "post",
        data 
    })
}
//获取所有用户列表
export function SelectUserList(data){
    return serviceLoc.request({
        url: "/selectUserList",
        method: "post",
        data 
    })
}
// 添加用户
export function AddUser(data){
    return serviceLoc.request({
        url: "/addUserList",
        method: "post",
        data 
    })
}
// 添加用户
export function DeleUser(data){
    return serviceLoc.request({
        url: "/deleUserList",
        method: "post",
        data 
    })
}
// 搜索用户
export function SearchUser(data){
    return serviceLoc.request({
        url: "/searchUser",
        method: "post",
        data 
    })
}

// 从未选择用户中查找用户
export function SearchAllUser(data){
    return serviceLoc.request({
        url: "/searchAllUser",
        method: "post",
        data 
    })
}