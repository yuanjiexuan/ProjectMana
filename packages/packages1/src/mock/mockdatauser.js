import Mock from "mockjs";
// import userstore from "../view/home/user/store/userstore";
var array = [
    {
        username: Mock.mock('@cname'),
        account: Mock.mock('@email'),
        usertype: Mock.mock('@pick(["内部","第三方"])'),
        fororgan: Mock.mock('@pick(["技术研发中心","市场营销中心"])'),
        key: Mock.mock('@id')
    },
    {
        username: Mock.mock('@cname'),
        account: Mock.mock('@email'),
        usertype: Mock.mock('@pick(["内部","第三方"])'),
        fororgan: Mock.mock('@pick(["技术研发中心","市场营销中心"])'),
        key: Mock.mock('@id')
    },
    {
        username: Mock.mock('@cname'),
        account: Mock.mock('@email'),
        usertype: Mock.mock('@pick(["内部","第三方"])'),
        fororgan: Mock.mock('@pick(["技术研发中心","市场营销中心"])'),
        key: Mock.mock('@id')
    },
    {
        username: Mock.mock('@cname'),
        account: Mock.mock('@email'),
        usertype: Mock.mock('@pick(["内部","第三方"])'),
        fororgan: Mock.mock('@pick(["技术研发中心","市场营销中心"])'),
        key: Mock.mock('@id')
    }
];
Mock.mock("/userList", { array });
let userAdd = function (options){
    const body = JSON.parse(options.body);
    let newitem = {
        username: body.username,
        account: body.account,
        usertype: body.usertype,
        fororgan: body.fororgan,
        key: Mock.mock('@id')
    }
    array.push(newitem)
    console.log(array)
    return {
        data: array
    }
}
Mock.mock("/useradd", userAdd);
let userDel = function (options){
    // const body = JSON.parse(options.body);
    let userindex = ""
    array.forEach(function(e,index){
        if(e.key === options.body){
            userindex = index
        }
    })
    array.splice(userindex,1)
    return {
        data: array
    }
}
Mock.mock("/userdel", userDel);
let userSearch = function (options){
    // const body = JSON.parse(options.body);
    console.log(options.body)
    let userindex = ""
    array.forEach(function(e,index){
        if(e.key === options.body || e.username === options.body){
            userindex = index
        }
    })
    let user=[]
    if(userindex !==""){
        user.push(array[userindex])
        // user= array[userindex]
    }
    if(!options.body){
        user = array
    }
    console.log(user)
    return {
        data: user
    }
}
Mock.mock("/usersearch", userSearch);
let userEdit = function (options){
    const body = JSON.parse(options.body);
    let userindex = ""
    array.forEach(function(e,index){
        if(e.key === body.key){
            userindex = index
        }
    })
    array[userindex] = body
    return {
        data: array
    }
}
Mock.mock("/useredit", userEdit);