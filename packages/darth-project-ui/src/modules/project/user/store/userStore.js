import { observable, action } from "mobx";
import {UserList,SelectUserList,AddUser,DeleUser,SearchUser,SearchAllUser} from "../../../../common/api/user";
export class UserStore {
    @observable userList = [];
    @observable selectUserList = [];
    @observable searchUserName = []
    // 获取所有成员
    @action
	getUserList = () => {
		UserList().then(response => {
            console.log(response)
            this.userList = response.data.userList;
            // if(response.data.code === 0){
            //     this.userlist = response.data.data;
            // }
        }).catch(error => {
            console.log(error)
        })
    }
    //获取已选择人员
    @action
	getSelectUserList = () => {
		SelectUserList().then(response => {
            console.log(response)
            this.selectUserList = response.data.selectUserList;
            // if(response.data.code === 0){
            //     this.userlist = response.data.data;
            // }
        }).catch(error => {
            console.log(error)
        })
    }
    //添加已选择人员
    @action
	addUser = (params) => {
        return new Promise((resolve,reject)=>{
            AddUser(params).then(response => {
                console.log(response)
                this.selectUserList = response.data.selectUserList;
                this.userList = response.data.userList;
                resolve()
                // if(response.data.code === 0){
                //     this.userlist = response.data.data;
                // }
            }).catch(error => {
                reject()
                console.log(error)
            })
        })
		
    }
    //添加已选择人员
    @action
	deleUser = (params) => {
		DeleUser(params).then(response => {
            // this.selectUserList = response.data.selectUserList;
            this.userList = response.data.userList
            this.searchUser(this.searchUserName)
        }).catch(error => {
            console.log(error)
        })
    }
    //搜索已选择人员
    @action
	searchUser = (params) => {
        this.searchUserName = params
		SearchUser(params).then(response => {
            // console.log(response)
            this.selectUserList = response.data.selectUserList;
        }).catch(error => {
            console.log(error)
        })
    }
    //搜索已未选择人员
    @action
	searchAllUser = (params) => {
		SearchAllUser(params).then(response => {
            // console.log(response)
            this.userList = response.data.userList;
        }).catch(error => {
            console.log(error)
        })
    }
}
export const DARTH_USER_STORE = "darthUserStore"