import { observable, action } from "mobx";
import qs from "qs";
import { GetsprintList,Getsprint,AddsprintList,DelesprintList,SearchsprintList,EditsprintList } from "../../../../common/api/sprint"
class sprintStore {
    @observable sprintlist = [];
    @observable searchsprint = [];
    @observable searchSprintName = [];
    @observable searchSprintId = [];
    @observable sprintPageParams = {
        current: 1,
        pageSize: 10
    };
    @observable totalRecord = "";
    @action
	getsprintlist = () => {
		GetsprintList().then(response => {
			this.sprintlist = response.data.data;
        }).catch(error => {
            console.log(error)
        })
    }
    //根据条件查询迭代列表
    @action
	getsprint = (projectid,sprintname) => {
        this.searchSprintId = projectid
        this.searchSprintName = sprintname
        const params={
            projectId: projectid,
            sprintName: sprintname,
            sortParams: [{
                name: "sprintName",
                sortType:"asc"
            }],
            pageParam: {
                pageSize: this.sprintPageParams.pageSize,
                currentPage: this.sprintPageParams.current
            }
        }
        return new Promise((resolve, reject)=>{
            Getsprint(params).then(response => {
                if(response.data.code === 0){
                    this.sprintlist = response.data.data.dataList;
                    this.totalRecord = response.data.data.totalRecord;
                }
                resolve(response.data)
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
		
    }
    @action
	addsprintlist = (values) => {
		AddsprintList(values).then(response => {
            if(response.data.code === 0){
                this.getsprint(values.project.id,this.searchSprintName)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	delesprintList = (values) => {
        const param = qs.stringify({id:values})
		DelesprintList(param).then(response => {
            if(response.data.code === 0){
                this.getsprint(this.searchSprintId,this.searchSprintName).then((res)=> {
                    if(res.data.dataList.length === 0){
                        this.sprintPageParams.current--
                        this.getsprint(this.searchSprintId,this.searchSprintName)
                    }
                })
            } 
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	searchsprintList = (values,type) => {
        const that = this;
        const param=qs.stringify({id:values})
        return new Promise(function(resolve, reject){
            SearchsprintList(param).then(response => {
                if(type === "edit"){
                    that.searchsprint = response.data.data
                }else {
                    that.sprintlist = [response.data.data];
                }
                resolve(response)
            }).catch(error => {
                console.log(error)
                reject()
            })
        })
		
    }
    @action
	editsprintList = (values) => {
		EditsprintList(values).then(response => {
            if(response.data.code ===0){
                this.getsprint(this.searchSprintId,this.searchSprintName,this.searchPageInfo)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    @action
    setSprintPageParam = (value)=> {
        this.sprintPageParams = {...value}
        // return new Promise((resolve,reject)=>{
        //     this.sprintPageParams = {...value}
        //     resolve()
        // })
        // this.sprintPageParams = {...value}
    }
}

const sprintstore = new sprintStore()

export default sprintstore;