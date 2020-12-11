import React,{Fragment,useEffect} from "react";
import { Breadcrumb,Input,Table, Space,Button } from 'antd';
import UserAddmodal from "../components/userAdd";
import { observer, inject } from "mobx-react";
const { Search } = Input;
const User =(props)=>{
    const {darthUserStore} = props
    const {getUserList,getSelectUserList,userList,selectUserList,addUser,deleUser,searchUser,searchAllUser} = darthUserStore
    
    useEffect(()=> {
        getSelectUserList()
        getUserList()
    },[])
    //删除用户
    const deleteUser=(id)=> {
        deleUser(id)
    }
    // 搜索用户
    const onSearch = (value) => {
        searchUser(value)
    }
    const columns=[
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            // render: (text,recode) => <Link to={`/index/sprintdetail/${recode.key}/itererasurvey`}>{text}</Link>,
        },
        {
            title: "手机号",
            dataIndex: "phone",
            key: "phone"
            
        },
        {
            title: "邮箱",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "部门",
            dataIndex: "department",
            key: "department",
        },
        {
            title: "操作",
            key: "action",
            render: (text, record) => (
            <Space size="middle">
                <UserAddmodal name="编辑" type="edit" id={record.id}>
                </UserAddmodal>
                <Button type="link" onClick={()=>deleteUser(record.id)}>
                    删除
                </Button>
            </Space>
            ),
        },
    ];
    return (
        <Fragment>
            <Breadcrumb>
                <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">成员管理</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <hr/>
            <div className="search-add">
                <Search
                    placeholder="input search text"
                    allowClear
                    style={{ width: 200, margin: '0 10px' }}
                    onSearch={onSearch}
                />
                <UserAddmodal 
                    name="添加成员" 
                    type="add" 
                    id="0" 
                    userList = {userList} 
                    getUserList={getUserList} 
                    addUser={addUser}
                    searchAllUser = {searchAllUser}
                ></UserAddmodal>
            </div>
            <Table 
                columns={columns} 
                dataSource={selectUserList} 
                rowKey={record=> record.id}
            />

        </Fragment>
        )
}
// export default User;  
export default inject("darthUserStore")(observer(User));