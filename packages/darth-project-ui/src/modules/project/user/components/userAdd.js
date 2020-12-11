import React from "react";
import { Modal, Button,Table,Space,message,Input } from 'antd';
const { Search } = Input;
const  UserAddmodal = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [selectedRowKeys,setSelectedRowKeys] = React.useState([]);
    const [selectedUserList,setSelectedUserList] = React.useState([]);
    const {userList,addUser,searchAllUser} = props;
    const showModal = () => {
        setVisible(true);
        
    };
    const columns=[
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            width: 150
            // render: (text,recode) => <Link to={`/index/sprintdetail/${recode.key}/itererasurvey`}>{text}</Link>,
        },
        {
            title: "手机号",
            dataIndex: "phone",
            key: "phone",
            width: 150
            
        },
        {
            title: "邮箱",
            dataIndex: "email",
            key: "email",
            width: 150
        },
        {
            title: "部门",
            dataIndex: "department",
            key: "department",
            width: 150
        }
    ];
    
    const onCancel = () => {
        setVisible(false);
    };
    
    // 选择用户
    const selectUser=(selected, selectedRows)=> {
        setSelectedRowKeys(selected)
        setSelectedUserList(selectedRows)
    }
    //提交用户列表
    const submitUserList = ()=> {
        // console.log(!selectedUserList,selectedUserList !== [])
        if(selectedUserList.length !== 0){
            addUser(selectedUserList).then(()=>{
                setSelectedUserList([])
                setSelectedRowKeys([])
                setVisible(false)
            })    
        }else {
            info()
        }
    }
    //没有选择用户提升
    const info = () => {
        message.info('请选择用户');
    };
    // 搜索成员
    const searchUnselectUser = (value) => {
        searchAllUser(value)
    }
    return (
        <>
        <div className="addmodel">
            {props.type !== "edit"?<Button type="primary" onClick={showModal}>
                    +{props.name}
                </Button>: <span onClick={showModal} style={{color: "#1890ff"}}>{props.name}</span>

            }
            <Modal
                title="选择成员"
                visible={visible}
                onCancel={onCancel}
                width={1200}
                onOk={submitUserList}
            >
                <Search
                    placeholder="输入成员名字、手机号、邮箱"
                    allowClear
                    style={{ width: 200, margin: '0 10px' }}
                    onSearch={searchUnselectUser}
                />
                <Table 
                    columns={columns} 
                    dataSource={userList} 
                    rowKey={record=> record.id}
                    rowSelection={{
                        selectedRowKeys,
                        onChange: selectUser
                    }}
                    okText="确定"
                    cancelText="取消"
                    
                />

            </Modal>
        </div>
        
        </>
    );
};

export default UserAddmodal;