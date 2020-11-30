import React from "react";
import { Table, Space,Button } from "antd";
import modulestore from "../modulestore/modulestore";
import { observer } from "mobx-react";
import {Link} from "react-router-dom";
import Moduleaddddmodal from "./moduleaddmodal";
// const delemodule = (key) => {
//     console.log(key)
// }
const columns = [
    {
        title: "模块名称",
        dataIndex: "modulename",
        key: "modulename",
        render: (text,record) => <Link to={`/index/moduledetail/${record.key}`}>{text}</Link>,
    },
    {
        title: "模块编码",
        dataIndex: "modulecode",
        key: "modulecode",
    },
    {
        title: "描述",
        dataIndex: "moduledes",
        key: "moduledes",
    },
    {
        title: "操作",
        key: "action",
        render: (text, record) => (
        <Space size="middle">
            <Moduleaddddmodal name="编辑" type="edit" id={record.key}>
            </Moduleaddddmodal>
            <Button type="link" onClick={()=>modulestore.delemoduleList(record)}>
                删除
            </Button>
        </Space>
        ),
    },
];


@observer class Modulelist extends React.Component{
    componentDidMount(){
        modulestore.getmodulelist()
    }
    
    render(){
            return (
                <Table columns={columns} dataSource={modulestore.modulelist} />
            )
        }
}
export default Modulelist;
