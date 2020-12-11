import React from "react";
import { Layout } from 'antd';
import SprintAside from "../components/sprintAside";
import { renderRoutes } from "react-router-config";
import sprintStore from "../../../project/sprint/store/sprintStore";
const { Sider } = Layout;
class sprintdetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sprintname: "",
            sprintid: ""
        }
    }
    componentDidMount(){
        sprintStore.searchsprintList(this.props.match.params.id).then((res)=> {
            this.setState({
                sprintname: res.data.data[0].sprintname,
                sprintid: res.data.data[0].key
            })
        })
    }
    render(){
        const route = this.props.route
        return (
            <Layout className="darth-sprint">
                <Sider>
                    <SprintAside name={this.state.sprintname} id={this.state.sprintid}></SprintAside>
                </Sider>
                <Layout className="prodecontent">
                    {renderRoutes(route.routes)}
                </Layout>
            </Layout>
        )
    }
}
export default sprintdetail;