import { observable,  action } from "mobx";
import {UserList,DeluserList,AdduserList,SearchUser,EditUser } from "../../../api/user" ;
class UserStore {
	@observable userlist = [];
	@observable userInfo = [];
	@action
	getUserList = () => {
		UserList().then(response => {
			this.userlist = response.data.array;
        }).catch(error => {
            console.log(error)
        })
	}
	@action
	delUserList = (key) => {
		DeluserList(key).then(response => {
			this.userlist = response.data.data;
			console.log(this.userlist)
        }).catch(error => {
            console.log(error)
        })
	}
	@action
	addUserList = (params) => {
		AdduserList(params).then(response => {
			this.userlist = response.data.data;
			console.log(this.userlist)
        }).catch(error => {
            console.log(error)
        })
	}
	@action
	searchUser = (key,type) => {
		console.log(this)
		const that = this;
		return new Promise(function(resolve, reject) {
			SearchUser(key).then(response => {
				if(type !== "search"){
					that.userInfo = response.data.data[0];
				}else {
					console.log(response.data.data)
					that.userlist=response.data.data;
					console.log(that.userlist)
					
				}
				resolve()
			}).catch(error => {
				console.log(error)
				reject()
			})
		})
		
	}
	@action
	editUserList = (params) => {
		EditUser(params).then(response => {
			this.userlist = response.data.data;
			// console.log(this.userlist)
        }).catch(error => {
            console.log(error)
        })
	}
	
	
}

const userstore = new UserStore()

export default userstore;