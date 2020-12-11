import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import { Breadcrumb,Input } from 'antd';
import ProjectAddmodal from "./projectAdd";
import { Table, Space,Button } from "antd";
import { observer } from "mobx-react";
const { Search } = Input;
@observer class Procontent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            columns : [
                {
                    title: "项目名称",
                    dataIndex: "projectName",
                    key: "projectName",
                    render: (text,record) => <Link to={`/index/prodetail/${record.id}/survey`}>{text}</Link>,
                },
                {
                    title: "项目编码",
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
                    dataIndex: "action",
                    key: "action",
                    render: (text, record) => (
                    <Space size="middle">
                        {/* <Adduserlogic name="编辑" id={record.key}></Adduserlogic> */}
                        <ProjectAddmodal type="eidt" id={record.id} name="编辑" searchpro={this.props.searchpro} updateProject={this.props.updateProject}></ProjectAddmodal>
                        <Button type="link" onClick={()=>props.deleproList(record.id)}>
                            删除
                        </Button>
                    </Space>
                    ),
                },
            ]
        }
    }
    onSearch = value => {
        if(value === ""){
            this.props.getProlist()
        }else {
            this.props.searchproList(value)
        }
        
    };
    render(){
        return (
            <Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">项目列表</a>
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
                    <ProjectAddmodal name="添加项目" type="add" addProlist={this.props.addProlist} searchpro={this.props.searchpro}></ProjectAddmodal>
                </div>
                <div>
                    <Table 
                        columns={this.state.columns}
                        dataSource={this.props.prolist} 
                        rowKey={record => record.id}
                        
                        
                    />
                </div>
                

            </Fragment>
        )
    }
}
export default Procontent;