import React from "react";
import { Breadcrumb } from 'antd';
import './conmid.scss';
import Contop from './contop';
import Logic from '../Organmidmain/addlogic'
import { Menu,Input  } from 'antd';
const { Search } = Input;
const onSearch = value => console.log(value);
class Conmid extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render(){
        return (
            <div className="conmid">
                <Breadcrumb>
                    <Breadcrumb.Item>组织管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">组织详情</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                
                <hr className="top-line"></hr>
                <Contop></Contop>
                <Menu mode="horizontal">
                    <Menu.Item key="mail">
                    用户管理
                    </Menu.Item>
                </Menu>
                <div className="add-user">
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    <Logic name="添加用户"></Logic>
                </div>
            </div>
            
            )
    }
}
export default Conmid;