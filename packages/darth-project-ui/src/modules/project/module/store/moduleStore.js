import { observable, action } from "mobx";
import qs from "qs";
import { Getmodule,AddmoduleList,DelemoduleList,SearchmoduleList,EditmoduleList,GetmoduleList,FindModulePage } from "../../../../common/api/module"
export class ModuleStore {
    @observable modulelist = [];
    @observable searchmodule = [];
    @observable searchModuleName = "";
    @observable modulePageParam = {
        current: 1,
        pageSize: 10
    };
    @observable totalRecord = "";
    @action
	getmodule = () => {
		Getmodule().then(response => {
            if(response.data.code === 0){
                this.modulelist = response.data.data;
            }
        }).catch(error => {
            console.log(error)
        })
    }
    // 带条件获取列表
    // @action
	// getmodulelist = (projectid,modulename) => {
    //     this.searchmoudlename = modulename;
    //     const params={
    //         projectId: projectid,
    //         moduleName: modulename,
    //         sortParams: [{
    //             name: "moduleName",
    //             sortType:"asc"
    //         }]
    //     }
    //     return new Promise((resolve, reject)=> {
    //         GetmoduleList(params).then(response => {
    //             if(response.data.code === 0){
    //                 this.modulelist = response.data.data;
    //             }
    //             resolve(response)
    //         }).catch(error => {
    //             reject(error)
    //         })
    //     })
		
    // }
    @action
	addmodulelist = (values) => {
		AddmoduleList(values).then(response => {
            if(response.data.code === 0){
                this.findModulePage(values.project.id,this.searchModuleName)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	delemoduleList = (moduleId,projectId) => {
        const param = qs.stringify({
            id: moduleId
        })
		DelemoduleList(param).then(response => {
            if(response.data.code === 0){
                // 删除当前页最后一条，返回上一页
                const that = this;
                this.findModulePage(projectId,this.searchModuleName).then((res)=> {
                    if(res.data.dataList.length === 0){
                        that.modulePageParam.current--
                    }
                })
                
            }
        }).catch(error => {
            console.log(error)
        })
    }
    @action
	searchmoduleList = (values,type) => {
        const that = this;
        const param= qs.stringify({
            id: values
        })
        return new Promise(function(resolve, reject){
            SearchmoduleList(param).then(response => {
                if(response.data.code === 0){
                    if(type === "edit"){
                        that.searchmodule = response.data.data
                    }else {
                        that.modulelist = [response.data.data];
                    }
                }
                resolve(response.data.data)
            }).catch(error => {
                console.log(error)
                reject()
            })
        })
		
    }
    @action
	editmoduleList = (values) => {
		EditmoduleList(values).then(response => {
            if(response.data.code ===0){
                this.findModulePage(values.project.id,this.searchModuleName)
            }
        }).catch(error => {
            console.log(error)
        })
    }
    //分页查询
    @action
	findModulePage = (projectId,moduleName) => {
        this.searchSprintId = projectId
        this.searchModuleName = moduleName
        const params={
            projectId: projectId,
            moduleName: moduleName,
            sortParams: [{
                name: "moduleName",
                sortType:"asc"
            }],
            pageParam: {
                pageSize: this.modulePageParam.pageSize,
                currentPage: this.modulePageParam.current
            }
        }
        return new Promise((resolve,reject)=>{
            FindModulePage(params)
                .then(response => {
                    if(response.data.code ===0){
                        this.modulelist = response.data.data.dataList
                        this.totalRecord = response.data.data.totalRecord
                        }
                        resolve(response.data)
                    })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            }

        )
		
    }
    @action
    setPageParam = (value)=> {
        this.modulePageParam = {...value}
    }
}

export const DARTH_MODULE_STORE = "darthModuleStore"