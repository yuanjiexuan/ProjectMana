import React, { Fragment, useEffect,useState } from "react";
import { Breadcrumb, Input, Table, Space, Button } from "antd";
import ModuleAddmodal from "../components/moduleAdd";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";

const { Search } = Input;
const Module = (props) => {
    const { darthModuleStore } = props;
    const {
        modulelist,
        searchmodule,
        findModulePage,
        addmodulelist,
        delemoduleList,
        searchmoduleList,
        editmoduleList,
        totalRecord,
        modulePageParam,
        setPageParam
    } = darthModuleStore;
    const projectId = props.match.params.id;
    const [sprintName,setSprintName] = useState("")
    const [loading,setLoading] = useState(false)
    // 初始化
    useEffect(() => {
        fetch()
        return null;
    }, [sprintName,modulePageParam.current]);
    // 点击分页
    const fetch = () => {
        setLoading(true)
        findModulePage(projectId,sprintName).then((res)=> {
            setLoading(false)
        })
    }
    const onSearch = (values) => {
        setSprintName(values)
        // 重置分页参数，从第一页开始搜索
        setPageParam({current: 1,pageSize: 10})
    };
    const handleTableChange=(pagination)=> {
        setPageParam(pagination)
        
    }
    const columns = [
        {
            title: "模块名称",
            dataIndex: "moduleName",
            key: "moduleName",
            render: (text, record) => (
                <Link to={`/index/moduledetail/${record.id}`}>{text}</Link>
            ),
        },
        {
            title: "所属项目",
            dataIndex: ["project", "projectName"],
            key: "project.projectName",
            render: (text) => <span>{text}</span>,
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
                <ModuleAddmodal
                    name="编辑"
                    type="edit"
                    id={record.id}
                    projectid={projectId}
                    searchmodule={searchmodule}
                    editmoduleList={editmoduleList}
                    addmodulelist={addmodulelist}
                    searchmoduleList={searchmoduleList}
                ></ModuleAddmodal>
                <Button
                    type="link"
                    onClick={() => delemoduleList(record.id, props.match.params.id)}
                >
                    删除
                </Button>
                </Space>
            ),
        },
    ];
    return (
        <Fragment>
        <Breadcrumb>
            <Breadcrumb.Item>模块管理</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/">模块详情</a>
            </Breadcrumb.Item>
        </Breadcrumb>
        <hr />
        <div className="search-add">
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{ width: 200, margin: "0 10px" }}
            />
            <ModuleAddmodal
                name="添加模块"
                type="add"
                id="0"
                projectid={props.match.params.id}
                addmodulelist={addmodulelist}
                editmoduleList={editmoduleList}
            ></ModuleAddmodal>
        </div>
        <Table
            columns={columns}
            dataSource={modulelist}
            rowKey={(record) => record.id}
            pagination = {{...modulePageParam,total: totalRecord}}
            loading={loading}
            onSearch ={onSearch}
            onChange = {handleTableChange}
        />
        </Fragment>
    );
};
export default inject("darthModuleStore")(observer(Module));
