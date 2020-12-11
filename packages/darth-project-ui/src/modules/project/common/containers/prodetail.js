

import React from "react";
import { Layout } from 'antd';
import ProdeAside from "../components/prodetailAside";
import "../components/prodetail.scss";
import { renderRoutes } from "react-router-config";
import {observer, inject} from "mobx-react";
const { Sider } = Layout;
class ProjectDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projectname: "",
            projectid: ""
        }
    }

    componentDidMount(){
        this.setState({
            projectid: this.props.match.params.id
        })
        this.props.darthProStore.searchpro(this.props.match.params.id).then((res)=> {
            this.setState({
                projectname: res.projectName
            })
        })
        this.props.darthProStore.getProlist()
    }
    render(){
        const route = this.props.route
        return (
            <Layout className="dath-prodetail">
                <ProdeAside projectName={this.props.darthProStore.projectName} proid={this.state.projectid} prolist={this.props.darthProStore.prolist} searchpro = {this.props.darthProStore.searchpro}></ProdeAside>
                <Layout className="prodetail-content">
                    {renderRoutes(route.routes)}
                </Layout>
            </Layout>
        )
    }
}
export default inject('darthProStore')(observer(ProjectDetail));