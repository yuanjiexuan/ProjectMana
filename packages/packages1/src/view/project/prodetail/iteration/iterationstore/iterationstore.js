import { observable, action } from "mobx";
import { GetiterationList,AdditerationList,DeleiterationList,SearchiterationList,EdititerationList } from "../../../../../api/iteration"
class iterationStore {
    @observable iterationlist = [];
    @observable searchiteration = [];
    @action
	getiterationlist = () => {
		GetiterationList().then(response => {
			this.iterationlist = response.data.array;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    
    @action
	additerationlist = (values) => {
		AdditerationList(values).then(response => {
            console.log(response)
			this.iterationlist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	deleiterationList = (values) => {
        console.log(values)
		DeleiterationList(values).then(response => {
			this.iterationlist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	searchiterationList = (values,type) => {
        const that = this;
        return new Promise(function(resolve, reject){
            SearchiterationList(values).then(response => {
                if(type == "edit"){
                    that.searchiteration = response.data.data
                }else {
                    that.iterationlist = response.data.data;
                }
                resolve(response)
            }).catch(error => {
                console.log(error)
                reject()
            })
        })
		
    }
    @action
	edititerationList = (values) => {
        console.log(values)
		EdititerationList(values).then(response => {
			this.iterationlist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
}

const iterationstore = new iterationStore()

export default iterationstore;