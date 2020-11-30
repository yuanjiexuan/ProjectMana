import { observable, action } from "mobx";
import { GetmoduleList,AddmoduleList,DelemoduleList,SearchmoduleList,EditmoduleList } from "../../../../../api/module"
class moduleStore {
    @observable modulelist = [];
    @observable searchmodule = [];
    @action
	getmodulelist = () => {
		GetmoduleList().then(response => {
			this.modulelist = response.data.array;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    
    @action
	addmodulelist = (values) => {
		AddmoduleList(values).then(response => {
            console.log(response)
			this.modulelist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	delemoduleList = (values) => {
        console.log(values)
		DelemoduleList(values).then(response => {
			this.modulelist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	searchmoduleList = (values,type) => {
        const that = this;
        return new Promise(function(resolve, reject){
            SearchmoduleList(values).then(response => {
                console.log(response.data)
                if(type == "edit"){
                    that.searchmodule = response.data.data
                }else {
                    that.modulelist = response.data.data;
                }
                resolve()
            }).catch(error => {
                console.log(error)
                reject()
            })
        })
		
    }
    @action
	editmoduleList = (values) => {
        console.log(values)
		EditmoduleList(values).then(response => {
			this.modulelist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
}

const modulestore = new moduleStore()

export default modulestore;