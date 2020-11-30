import Mock from "mockjs";
var array = [
    {
        iterationname: Mock.mock('@cword(3, 5)'),
        iterationcode: Mock.mock('@id'),
        iterationdes: "",
        key: Mock.mock('@increment')
    },
    {
        iterationname: Mock.mock('@cword(3, 5)'),
        iterationcode: Mock.mock('@id'),
        iterationdes: "",
        key: Mock.mock('@increment')
        
    },
    {
        iterationname: Mock.mock('@cword(3, 5)'),
        iterationcode: Mock.mock('@id'),
        iterationdes: "",
        key: Mock.mock('@increment')
    },
    {
        iterationname: Mock.mock('@cword(3, 5)'),
        iterationcode: Mock.mock('@id'),
        iterationdes: "",
        key: Mock.mock('@increment')
    },
    {
        iterationname: Mock.mock('@cword(3, 5)'),
        iterationcode: Mock.mock('@id'),
        iterationdes: "",
        key: Mock.mock('@increment')
    },
    {
        iterationname: Mock.mock('@cword(3, 5)'),
        iterationcode: Mock.mock('@id'),
        iterationdes: "",
        key: Mock.mock('@increment')
    }
];
Mock.mock("/iterationlist", { array });
let iterationSearch = function (options){
    let userindex = "";
    let newArray = [];
    array.forEach(function(e,index){
        if(e.key == options.body || e.iterationname.indexOf(options.body)!==-1){
            userindex = index
            newArray.push(array[userindex])
        }
        if(!options.body){
            newArray=array
        }
    })
    
    return {
        data: newArray
    }
}
Mock.mock("/iterationsearch", iterationSearch);
let iterationAdd = function (options){
    const body = JSON.parse(options.body);
    let newitem = {
        iterationname: body.iterationname,
        iterationcode: body.iterationcode,
        iterationdes: "",
        key: Mock.mock('@increment')
    }
    array.push(newitem)
    return {
        data: array
    }
}
Mock.mock("/iterationadd", iterationAdd);

let iterationDele = function (options){
    let userindex = ""
    const body = JSON.parse(options.body);
    array.forEach(function(e,index){
        if(e.iterationcode === body.iterationcode){
            userindex = index
        }
    })
    console.log(userindex)
    array.splice(userindex,1)
    return {
        data: array
    }
}
Mock.mock("/iterationdele", iterationDele);
let iterationEdit = function (options){
    const body = JSON.parse(options.body);
    let newitem = {
        iterationname: body.iterationname,
        iterationcode: body.iterationcode,
        iterationdes: "",
        key: body.key
    }
    let userindex = ""
    array.forEach(function(e,index){
        if(e.key === body.key){
            userindex = index
        }
    })
    array[userindex] = newitem
    return {
        data: array
    }
}
Mock.mock("/iterationedit", iterationEdit);