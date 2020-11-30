import React from 'react';
import Proaside from "./components/Proaside";
import { Layout } from 'antd';
import Procontent from "./components/procontent";

import "./index.scss"
const { Sider } = Layout;
class Project extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }
    // componentDidMount(){
    //     Prostore.s
    // }
    render(){
        return (
            <div className="procontent">
                <Layout style={{height:'80vh'}}>
                    <Sider style={{height:'80vh'}}>
                        <Proaside></Proaside>
                    </Sider>
                    
                    <Layout style={{background: "#fff",padding: "10px 10px"}}>
                        <Procontent></Procontent>
                    </Layout>
                </Layout>
            </div>

        )
    }
}
export default Project;