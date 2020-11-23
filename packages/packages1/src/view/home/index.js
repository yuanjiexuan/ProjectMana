import React,{Fragment} from 'react';
import { Layout  } from 'antd';
import "./index.scss";
import Headerself from "../../components/header";
const { Header, Content } = Layout;

class Organ extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Fragment>
            <Layout className="lnit">
                <div className = "mianHeader">
                    <Header>
                        <Headerself></Headerself>
                    </Header>
                </div>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        margin: 24,
                        minHeight: 280,
                    }}
                    >
                    <div className="main-left">
                        
                    </div>
                    <div className="main-right">
                        
                    </div>
                </Content>
            </Layout>
        </Fragment>
        );
    }
}

export default Organ;