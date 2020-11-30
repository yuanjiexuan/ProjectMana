import React,{Fragment} from 'react';
import { Menu  } from 'antd';
import { Link } from "react-router-dom";
//路由
import Router from "../../../view/orga/router/index";
import store from "../../../view/orga/store/store";
import { observer } from "mobx-react";
const { SubMenu } = Menu;
@observer
class AsideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    // 无子级菜单处理
    renderMenu = (data)=> {
        return (
            <Menu.Item key={data.key}>
                <Link to={data.key}>
                    {data.title}
                </Link>
            </Menu.Item>)
    }
    
    // 子级菜单处理
    renderSubMenu = ({title,key,children})=> {
        return (
        <SubMenu key={key} title={title}>
        {
            children && children.map(item =>{
                return item.children && item.children.length?
                this.renderSubMenu(item) : this.renderMenu(item)
            })
        }
        </SubMenu>)
    }
    render(){
        
        return (
        <Fragment>
            <Menu
            mode="inline"
            defaultSelectedKeys={[store.routerArray]}
            style={{ height: '100%', borderRight: 0 }}
            >  
                {
                    
                    Router && Router.map(firstItem => {
                        return firstItem.children && firstItem.children.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                    })
                }
            </Menu>
        </Fragment>
        )
    }
}
export default AsideMenu;