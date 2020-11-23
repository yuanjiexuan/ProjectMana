import React from "react";
import { Table, Space } from "antd";
import UserStore from "../store/userstore"
import userstore from "../store/userstore";
import "./userfrom.scss";
import { observer } from "mobx-react";
import Adduserlogic from "./adduserlogic"
const columns = [
    {
        title: "用户名",
        dataIndex: "username",
        key: "username",
        // render: (text) => <span>{text}</span>,
    },
    {
        title: "账号",
        dataIndex: "account",
        key: "account",
    },
    {
        title: "类别",
        dataIndex: "usertype",
        key: "usertype",
    },
    {
        title: "组织",
        key: "fororgan",
        dataIndex: "fororgan",
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
        <Space size="middle">
            <Adduserlogic name="编辑" id={record.key}></Adduserlogic>
            {/* <span className="edit" >编辑</span> */}
            <span className="dele" onClick={()=>UserStore.delUserList(record.key)}>删除</span>
        </Space>
        ),
    },
    ];


@observer class Userfrom extends React.Component{
    componentDidMount(){
        UserStore.getUserList()
    }
    // deluser(key){
    //     UserStore.delUserList()
    // }
    render(){
            return (
                <Table columns={columns} dataSource={userstore.userlist} />
            )
        }
}
export default Userfrom;
