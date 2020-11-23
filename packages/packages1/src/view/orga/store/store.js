// import { observer } from "mobx-react";
import { observable, action } from "mobx";
import {OrganListAdd,OrganList,OrganListDele,OrganListSerch,OrganListEdit} from "../../../api/organ" ;
class MobxStore {
	@observable organlist = [];
	@observable selectlist = {
		title: "",
		fatitle: ""
	};
	@observable routerArray=[]
	@action
	addOrganlist = (values) => {
		OrganListAdd(values).then(response => {
			console.log(this.organlist)
			this.organlist = response.data.data;
			console.log("q",this.organlist)
        }).catch(error => {
            console.log(error)
        })
	}
	@action
	getOrganlist = ()=> {
		OrganList().then(response => {
			console.log(response.data)
			// this.setState({organlist: response.data.array})
			this.organlist =  response.data.array
			console.log(this.organlist)
		}).catch(error => {
			console.log(error)
		})
	}
	@action
	deleOrganlist = (key,fakey)=> {
		let param={
			key:key
		}
		OrganListDele(param).then(response => {
			console.log(response.data)
			// this.setState({organlist: response.data.array})
			this.organlist =  response.data.data
			console.log(this.organlist)
		}).catch(error => {
			console.log(error)
		})
	}
	//点击菜单跳转
	@action
	searchOrganlist = (key,fakey)=> {
		let param={
			key:key,
			fakey:fakey
		}
		let that = this;
		return new Promise (function(resolve, reject){
			OrganListSerch(param).then(response => {
				console.log(response.data)
				// this.setState({organlist: response.data.array})
				that.selectlist.fatitle =  response.data.data.fatitle
				that.selectlist.title =  response.data.data.title
				console.log(that.selectlist)
				resolve()
			}).catch(error => {
				console.log(error)
				reject()
			})
		})
	}
	@action
	editOrganlist = (key)=> {
		OrganListEdit(key).then(response => {
			console.log(response.data)
			this.organlist =  response.data.data
			console.log(this.selectlist)
		}).catch(error => {
			console.log(error)
		})
	}
	@action
	changeKey=(data)=> {
		this.routerArray[0] = data;
		console.log(this.routerArray[0])
	}
	
}

const store = new MobxStore()

export default store;
