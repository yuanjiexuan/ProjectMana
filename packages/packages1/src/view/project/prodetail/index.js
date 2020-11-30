import React from "react";
import { Layout } from 'antd';
import Proaside from "./components/prodeaside";
import "./index.scss";
import ProStore from "../store/store";
import { renderRoutes } from "react-router-config";
const { Sider } = Layout;
class Prodetail extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            projectname: "",
            projectid: ""
        }
    }
    componentDidMount(){
        this.setState({
            projectid: this.props.match.params.id
        })
        ProStore.searchpro(this.props.match.params.id).then((res)=> {
            this.setState({
                projectname: res[0].proname
            })
        })
    }
    render(){
        console.log(this.props)
        const route = this.props.route
        return (
            <Layout className="prodetail">
                <Sider>
                    <Proaside proname={this.state.projectname} proid={this.state.projectid}></Proaside>
                </Sider>
                <Layout className="prodecontent">
                    {renderRoutes(route.routes)}
                </Layout>
            </Layout>
        )
    }
}
export default Prodetail;