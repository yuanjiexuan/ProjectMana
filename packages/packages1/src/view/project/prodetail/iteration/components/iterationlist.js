import React from "react";
import { Table, Space,Button } from "antd";
import iterationstore from "../iterationstore/iterationstore";
import { observer } from "mobx-react";
import {Link} from "react-router-dom";
import Iterationaddddmodal from "./iterationaddmodal";
// const deleiteration = (key) => {
//     console.log(key)
// }
const columns = [
    {
        title: "模块名称",
        dataIndex: "iterationname",
        key: "iterationname",
        render: (text,recode) => <Link to={`/index/iterationdetail/${recode.key}/itererasurvey`}>{text}</Link>,
    },
    {
        title: "模块编码",
        dataIndex: "iterationcode",
        key: "iterationcode",
    },
    {
        title: "描述",
        dataIndex: "iterationdes",
        key: "iterationdes",
    },
    {
        title: "操作",
        key: "action",
        render: (text, record) => (
        <Space size="middle">
            <Iterationaddddmodal name="编辑" type="edit" id={record.key}>
            </Iterationaddddmodal>
            <Button type="link" onClick={()=>iterationstore.deleiterationList(record)}>
                删除
            </Button>
        </Space>
        ),
    },
];


@observer class Iterationlist extends React.Component{
    componentDidMount(){
        iterationstore.getiterationlist()
    }
    
    render(){
            return (
                <Table columns={columns} dataSource={iterationstore.iterationlist} />
            )
        }
}
export default Iterationlist;
