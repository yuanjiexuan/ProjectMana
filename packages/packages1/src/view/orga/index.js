import React,{Fragment} from 'react';
import { Layout  } from 'antd';
import "./index.scss";
import Aside from "./components/Aside";
import ContainerMain from "../../components/ContentMain/index";
import Headerself from "../../components/header";
const { Header, Sider,Content } = Layout;

class Organ extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <Fragment>
            <Layout>
                <div className = "mianHeader">
                    <Header>
                        <Headerself></Headerself>
                    </Header>
                </div>
                <Layout className="mainContain">
                <Sider width={200} className="site-layout-background">
                    <Aside></Aside>
                </Sider>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        margin: 24,
                        minHeight: 280,
                    }}
                    >
                        <ContainerMain></ContainerMain>
                </Content>
                </Layout>
            </Layout>
        </Fragment>
        );
    }
}

export default Organ;