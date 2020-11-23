import React from "react";

import "./login.scss";
import NormalLoginForm from './components/loginfrom.js'
import { Layout} from "antd";

const { Header, Footer, Content } = Layout;
// import { Button } from 'antd';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render(){
        return (
            <div className="login">
            {/* <Layout style={{minWidth: 100px}}></Layout> */}
            <Layout className="header">
                <Header>
                <div className="logo">
                    {/* <img /> */}
                </div>
                <div className="logo-content">
                    <div className="loginBottom">登陆</div>
                    <div className="help">帮助</div>
                </div>
                </Header>
                <Content>
                <div className="content-img" />
                <div className="content-form">
                    <NormalLoginForm></NormalLoginForm>
                </div>
                </Content>
                <Footer>DARTHCLOUD</Footer>
            </Layout>
            </div>
        )
    }
}
export default Home;