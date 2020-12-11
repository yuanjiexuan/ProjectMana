import React,{Fragment} from 'react';
import { Menu  } from 'antd';
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
const { SubMenu } = Menu;
const router = [
    {
        title: "组织管理",
        icon: 'home',
        key: '/index/organ/organ',
        
    },
    {
        title: '用户管理',
        icon: 'laptop',
        key: '/index/organ/user'
    }
]
@observer
class OrgaAside extends React.Component {
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
                defaultSelectedKeys={['/index/organ/organ']}
                style={{ height: '100%' }}
                >  
                    {
                        
                        router && router.map(firstItem => {
                            return firstItem.children && firstItem.children.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                        })
                    }
                </Menu>
            </Fragment>
        )
    }
}
export default OrgaAside;