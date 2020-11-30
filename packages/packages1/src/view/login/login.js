import React from "react";

import "./login.scss";
import NormalLoginForm from './components/loginfrom.js'
import { Layout} from "antd";
import {PortalLogin} from 'darth-portal-ui'
import logo from "../../assets/images/logo.jpg";
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
            // <div className="login">
            // {/* <Layout style={{minWidth: 100px}}></Layout> */}
            // <Layout className="header">
            //     <Header>
            //     <div className="logo">
            //         {/* <img /> */}
            //     </div>
            //     <div className="logo-content">
            //         <div className="loginBottom">登陆</div>
            //         <div className="help">帮助</div>
            //     </div>
            //     </Header>
            //     <Content>
            //     <div className="content-img" />
            //     <div className="content-form">
            //         <NormalLoginForm></NormalLoginForm>
            //     </div>
            //     </Content>
            //     <Footer>DARTHCLOUD</Footer>
            // </Layout>
            // </div>
            <div>
                <PortalLogin 
                    contentImg={logo}
                    {...this.props}
                    loginGoRouter={'/index'}
                >
                </PortalLogin>
            </div>
        )
    }
}
export default Home;