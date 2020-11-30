import { observable, action } from "mobx";
import { GetproList,AddproList,DeleproList,SearchproList,Searchpro } from "../../../api/project"
class ProStore {
    @observable prolist = [];
    @action
	getProlist = () => {
		GetproList().then(response => {
			this.prolist = response.data.array;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    
    @action
	addProlist = (values) => {
		AddproList(values).then(response => {
            console.log(response)
			this.prolist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	deleproList = (values) => {
        console.log(values)
		DeleproList(values).then(response => {
			this.prolist = response.data.data;
			// console.log("q",response)
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	searchproList = (values) => {
        console.log(values)
        return new Promise((resolve, reject)=>{
            SearchproList(values).then(response => {
                this.prolist = response.data.data;
                // console.log("q",response)
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
        return new Promise((resolve, reject)=>{
            Searchpro(values).then(response => {
                this.prolist = response.data.data;
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

const Prostore = new ProStore()

export default Prostore;