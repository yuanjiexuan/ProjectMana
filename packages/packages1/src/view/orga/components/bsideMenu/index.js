import React,{Fragment} from 'react';
import { Menu  } from 'antd';
// import { Link } from "react-router-dom";
import { observer } from "mobx-react";
//路由
import "./index.scss"
import store from "../../store/store"
import Logic from "../Organmidmain/addlogic"
const { SubMenu } = Menu;
@observer class BsideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: [1,2,3,4],
            organlist: ''
        }
    }
    componentDidMount(){
        
        store.getOrganlist();
    }
    deleList(key,fakey){
        console.log(123)
        store.deleOrganlist(key,fakey)
    }
    selectItem=(e)=>{
        store.searchOrganlist(e.key,e.keyPath[1])
    }
    
    // 无子级菜单处理
    renderMenu = (data,fakey)=> {
        return (
            <Fragment key={data.key}>
                <Menu.Item key={data.key}>
                    {/* <Link to={{pathname: data.key,query: {id: 1}}} className="titleLink"> */}
                    {/* <Link to={data.key} className="titleLink"> */}
                    <div>
                        {data.title}
                    </div>
                </Menu.Item>
                <div key={`${data.key}0`} className="deletBotton">
                    <div onClick={() => this.deleList(data.key)} key={data.key}>删除</div>
                    <div><Logic name="修改" type="edit" id={data.key} faid={data.key}></Logic></div>
                </div>
                
            </Fragment>
            )
    }
    // 子级菜单处理
    renderSubMenu = ({title,key,children})=> {
        return (
            <Fragment key={key}>
                <SubMenu key={key} title={title}>
                    {
                        children && children.map(item =>{
                            return item.children && item.children.length?
                            this.renderSubMenu(item,key) : this.renderMenu(item,key)
                        })
                        
                    }
                </SubMenu>
            </Fragment>
        
        )
    }
    render(){
        // const { organlist } = this.state.organlist;
        let organlist = store.organlist
        return (
            <Fragment>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
                onClick={this.selectItem}
                >   
                    {
                        
                        organlist && organlist.map(firstItem => {
                            return firstItem.children && firstItem.children.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                        })
                    }
                </Menu>

            </Fragment>
        )
    }
}
export default BsideMenu;