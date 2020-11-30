import React,{Fragment} from 'react';
import {observer, inject} from "mobx-react";
import { Layout  } from 'antd';
import ContainerMain from "../../components/organ/ContentMain/index";
import Aside from "../../components/organ/asideMenu/Aside";
const { Header, Sider,Content } = Layout;
const Home = (props) => {

    
    

    return(
        // <Fragment>
        // <DarthOrgContent
        //     {...props}
        //     selectMenu={onSelectMenu}
        // >
        // </DarthOrgContent>
        // {/* <DarthUser
        //         {...props}
        //         homeRouter={homeRouter}
        //         selectMenu={onSelectMenu}
        // /> */}
        // </Fragment>
        <Fragment>       
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
        </Fragment>
    )
}



export default inject('darthOrgStore')(observer(Home))