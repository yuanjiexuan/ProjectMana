import service from ".././../src/utils/requset";
import '../mock/mockdataorgan.js'
// 请求接口
export function Login(data){
    return service.request({
        url: "/login",
        method: "post",
        data 
        //请求类型为post 时，
        // params: data 请求类型为get时
    })
}