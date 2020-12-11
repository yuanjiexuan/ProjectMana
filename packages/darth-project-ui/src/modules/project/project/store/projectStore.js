import { observable, action } from "mobx";
import { GetproList,AddproList,DeleproList,Searchpro,UpdateproList } from "../../../../common/api/project";
import qs from "qs";
export class ProStore {
    @observable prolist = [];
    @observable project = [];
    @observable projectName = "";
    @action
	getProlist = () => {
		GetproList().then(response => {
			this.prolist = response.data.data;
        }).catch(error => {
            console.log(error)
        })
    }
    
    @action
	addProlist = (values) => {
		AddproList(values).then(response => {
            if(response.data.code === 0){
                // this.prolist=this.prolist.concat({...values,id: response.data.data})
                this.getProlist()
            }
            
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	deleproList = (values) => {
        const params = qs.stringify({
            id: values
        })
        const that = this;
		DeleproList(params).then(response => {
            if(response.data.code === 0){
                // that.prolist = that.prolist.filter((item)=> {
                //     return !values.includes(item.id)
                // })
                that.getProlist()
            }
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    // 修改
    @action
	updateProject = (values) => {
        console.log(values)
        const that = this;
        return new Promise((resolve, reject)=>{
            UpdateproList(values).then(response => {
                // this.prolist = response.data.data;
                if(response.data.code === 0){
                    that.getProlist()
                }
                console.log("q",response)
                resolve(response.data.data)
                }).catch(error => {
                    console.log(error)
                    reject()
                })
            }
        )
		
    }
    @action
	searchproList = (values) => {
        const params = qs.stringify({
            id: values
        })
        const that = this;
        return new Promise((resolve, reject)=>{
            Searchpro(params).then(response => {
                that.prolist=[response.data.data];
                resolve(response.data.data)
                }).catch(error => {
                    console.log(error)
                    reject()
                })
            }
        )
		
    }
    @action
	searchpro = (values) => {
        const params = qs.stringify({
            id: values
        })
        const that = this;
        return new Promise((resolve, reject)=>{
            Searchpro(params).then(response => {
                that.project = response.data.data;
                that.projectName = response.data.data.projectName;
                // console.log("q",response)
                resolve(response.data.data)
                }).catch(error => {
                    console.log(error)
                    reject()
                })
            }
        )
		
	}
}

export const DARTH_PRO_STORE = "darthProStore"

// export default Prostore;