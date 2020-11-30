import React from "react";
import { Table, Space,Button } from "antd";
import prostore from "../store/store";
import { observer } from "mobx-react";
import {Link} from "react-router-dom";
// const delepro = (key) => {
//     console.log(key)
// }
const columns = [
    {
        title: "项目名称",
        dataIndex: "proname",
        key: "proname",
        render: (text,record) => <Link to={`/index/prodetail/${record.key}`}>{text}</Link>,
    },
    {
        title: "项目编码",
        dataIndex: "procode",
        key: "procode",
    },
    {
        title: "描述",
        dataIndex: "prodes",
        key: "prodes",
    },
    {
        title: "操作",
        key: "action",
        render: (text, record) => (
        <Space size="middle">
            {/* <Adduserlogic name="编辑" id={record.key}></Adduserlogic> */}
            <span className="edit" >编辑</span>
            <Button type="link" onClick={()=>prostore.deleproList(record)}>
                删除
            </Button>
        </Space>
        ),
    },
];


@observer class Profrom extends React.Component{
    // componentDidMount(){
    //     prostore.getProlist()
    // }
    
    render(){
            return (
                <Table columns={columns} dataSource={prostore.prolist} />
            )
        }
}
export default Profrom;
