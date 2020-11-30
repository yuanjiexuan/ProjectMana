import React from "react";
import { Layout } from 'antd';
import Itedetailaside from "./components/itedetailaside";
import Iteradetail from "./iteraderouter/iteraderouter";
import iterationStore from "../iterationstore/iterationstore";
const { Sider } = Layout;
class Iterationdetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            iterationname: "",
            iterationid: ""
        }
    }
    componentDidMount(){
        iterationStore.searchiterationList(this.props.match.params.id).then((res)=> {
            this.setState({
                iterationname: res.data.data[0].iterationname,
                iterationid: res.data.data[0].key
            })
        })
    }
    render(){
        return (
            <Layout className="prodetail">
                <Sider>
                    <Itedetailaside name={this.state.iterationname} id={this.state.iterationid}></Itedetailaside>
                </Sider>
                <Layout className="prodecontent">
                    <Iteradetail></Iteradetail>
                </Layout>
            </Layout>
        )
    }
}
export default Iterationdetail;