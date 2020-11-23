import React from "react";
import { Breadcrumb } from 'antd';
import './userindex.scss';
import { Menu,Input  } from 'antd';
import Adduserlogic from "./components/adduserlogic";
import UserStore from "./store/userstore";
import Userfrom from "./components/userfrom"
const { Search } = Input;
class Usercon extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        
        UserStore.getUserList();
    }
    onSearch = value => {
        console.log(value)
        UserStore.searchUser(value,"search")
    };
    render(){
        return (
            <div className="organization">
                <Breadcrumb>
                    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">用户列表</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                
                <hr className="top-line"></hr>
                {/* <Fromtop></Fromtop> */}
                <Menu mode="horizontal">
                    <Menu.Item key="all">
                    全部
                    </Menu.Item>
                    <Menu.Item key="in">
                    内部
                    </Menu.Item>
                </Menu>
                <div className="add-user">
                    <Search placeholder="请输入用户名" onSearch={this.onSearch} style={{ width: 200 }} />
                    <Adduserlogic name="添加用户" id="0"></Adduserlogic>
                    <Adduserlogic name="导入用户" id="1"></Adduserlogic>
                </div>
                <Userfrom></Userfrom>
                {/* <div className="user-table">
                    <table>
                        <tr>
                            <th>用户名</th>
                            <th>账号</th>
                            <th>所属机构</th>
                            <th>类别</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>张三@qq.com</td>
                            <td>技术研发部</td>
                            <td>内部</td>
                            <td>删除</td>
                        </tr>
                        <tr>
                            <td>张三</td>
                            <td>张三@qq.com</td>
                            <td>技术研发部</td>
                            <td>内部</td>
                            <td>删除</td>
                        </tr>
                    </table>
                </div> */}
                
                {/* <hr/> */}
            </div>
            
            )
    }
}
export default Usercon;