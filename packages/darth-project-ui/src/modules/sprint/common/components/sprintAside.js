import React,{Fragment} from 'react';
import { Menu } from 'antd';
import {Link,withRouter} from "react-router-dom";
class SprintAside extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id,
            selectedKeys: [`/index/sprintdetail/${this.props.match.params.id}/itererasurvey`]
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({
            selectedKeys: [this.props.location.pathname]
        })
    }
    onSelect=(value)=>{
        console.log(value)
        this.setState({
            selectedKeys: [value.key]
        })
    }
    render(){
        return (
            <Fragment>
                <div className="pro-title">{this.props.name}</div>
                <Menu 
                    mode="inline" 
                    style={{ width: 200,height: "80vh" }}
                    selectedKeys={this.state.selectedKeys}
                    onClick={this.onSelect}
                    >
                        <Menu.Item key={`/index/sprintdetail/${this.state.id}/itererasurvey`} ><Link to={`/index/sprintdetail/${this.state.id}/itererasurvey`}>概况</Link></Menu.Item>
                        <Menu.Item key={`/index/sprintdetail/${this.state.id}/itererapanel`} ><Link to={`/index/sprintdetail/${this.state.id}/itererapanel`}>仪表盘</Link></Menu.Item>
                        <Menu.Item key={`/index/sprintdetail/${this.state.id}/itereraaffair`} ><Link to={`/index/sprintdetail/${this.state.id}/itereraaffair`}>事项</Link></Menu.Item>
                        <Menu.Item key={`/index/sprintdetail/${this.state.id}/itererastatistics`}><Link to={`/index/sprintdetail/${this.state.id}/itererastatistics`}>统计</Link></Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}
export default withRouter(SprintAside);