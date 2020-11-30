import React,{Fragment} from 'react';

import {Link,withRouter} from "react-router-dom";
import { Menu } from 'antd';
class Prodeaside extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            proname: "",
            proid: this.props.match.params.id,
            selectedKeys: [`/index/prodetail/${this.props.match.params.id}/survey`]
        }
    } 
    componentDidMount(){
        console.log(this.props)
        const pathname= this.props.location.pathname;
        const proid = this.props.match.params.id;
        this.setState({
            selectedKeys: [pathname]
        },function(){
            console.log(this.state)
        })
    }
    select=(value)=>{
        console.log(value)
        this.setState({
            selectedKeys: [value.key]
        })
    }
    render(){
        return (
            <Fragment>
                <div className="pro-title">{this.props.proname}</div>
                <Menu 
                    mode="inline" 
                    style={{ width: 200,height: "80vh" }}
                    // defaultSelectedKeys={this.state.selectedKeys}
                    selectedKeys={this.state.selectedKeys}
                    onClick={this.select}
                    >
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/survey`} ><Link to={`/index/prodetail/${this.state.proid}/survey`}>概况</Link></Menu.Item>
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/panel`} ><Link to={`/index/prodetail/${this.state.proid}/panel`}>仪表盘</Link></Menu.Item>
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/affair`} ><Link to={`/index/prodetail/${this.state.proid}/affair`}>事务</Link></Menu.Item>
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/iteration`} ><Link to={`/index/prodetail/${this.state.proid}/iteration`}>迭代</Link></Menu.Item>
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/module`} ><Link to={`/index/prodetail/${this.state.proid}/module`}>模块</Link></Menu.Item>
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/user`} ><Link to={`/index/prodetail/${this.state.proid}/user`}>人员</Link></Menu.Item>
                        <Menu.Item key={`/index/prodetail/${this.state.proid}/statistics`} ><Link to={`/index/prodetail/${this.state.proid}/statistics`}>统计</Link></Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}
export default withRouter(Prodeaside);