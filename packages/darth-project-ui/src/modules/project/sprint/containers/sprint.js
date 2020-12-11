import React,{Fragment} from "react";
import { Breadcrumb,Input,Table, Space,Button } from 'antd';
import SprintAddmodal from "../components/spintAdd";
import sprintstore from "../store/sprintStore";
import {Link} from "react-router-dom";
import {observer} from "mobx-react"
const { Search } = Input;
@observer
class Sprint extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            columns:[
                {
                    title: "迭代名称",
                    dataIndex: "sprintName",
                    key: "sprintName",
                    render: (text,recode) => <Link to={`/index/sprintdetail/${recode.key}/itererasurvey`}>{text}</Link>,
                },
                {
                    title: "所属项目",
                    dataIndex: ["project","projectName"],
                    key: "project.projectName",
                    render: (text,recode) => <Link to={`/index/sprintdetail/${recode.key}/itererasurvey`}>{text}</Link>,
                    
                },
                {
                    title: "迭代编码",
                    dataIndex: "id",
                    key: "id",
                },
                {
                    title: "描述",
                    dataIndex: "desc",
                    key: "desc",
                },
                {
                    title: "操作",
                    key: "action",
                    render: (text, record) => (
                    <Space size="middle">
                        <SprintAddmodal name="编辑" type="edit" id={record.id}>
                        </SprintAddmodal>
                        <Button type="link" onClick={()=>sprintstore.delesprintList(record.id)}>
                            删除
                        </Button>
                    </Space>
                    ),
                },
            ],
            loading: false,
            searchSprintName: ""
        })
    }

    componentDidMount(){
        this.fetch();
    }
    fetch = (params = {}) => {
        this.setState({ loading: true });
        sprintstore.getsprint(this.props.match.params.id,this.state.searchSprintName,params).then((res)=> {
            this.setState({
                loading: false
            });
        })
    }
    handleTableChange=(pagination)=> {
        console.log(pagination)
        sprintstore.setSprintPageParam(pagination)
        this.fetch();
        // .then(()=>{
        //     this.fetch();
        // })
        
    }
    onSearch=(values)=> {
        sprintstore.setSprintPageParam({current: 1,pageSize: 10})
        this.setState({
            searchSprintName: values,
        },()=> {
            this.fetch(this.state.pagination)
        })
    }
    render(){
        const { pagination, loading } = this.state;
        return (
        <Fragment>
            <Breadcrumb>
                <Breadcrumb.Item>迭代管理</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">迭代详情</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <hr/>
            <div className="search-add">
                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={this.onSearch}
                    style={{ width: 200, margin: '0 10px' }}
                />
                <SprintAddmodal name="添加迭代" type="add" id="0" projectid={this.props.match.params.id}></SprintAddmodal>
            </div>
            <Table 
                columns={this.state.columns} 
                dataSource={sprintstore.sprintlist} 
                rowKey={record=> record.id} 
                onChange={this.handleTableChange} 
                pagination = {{...sprintstore.sprintPageParams,total: sprintstore.totalRecord}}
                loading={loading}
            />

        </Fragment>
        )
    }
}
export default Sprint;  