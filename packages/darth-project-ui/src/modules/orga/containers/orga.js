import React,{Fragment} from 'react';
import {observer, inject} from "mobx-react";
import { Layout  } from 'antd';
import OrgaAside from "../components/orgaAside";
import "../components/orga.scss"
import { renderRoutes } from "react-router-config";
const { Sider,Content } = Layout;
const Orga = (props) => {

    const route = props.route
    return(
        <Fragment>       
            <Layout className="darth-orga">
                <Sider width={200} className="site-layout-background">
                    <OrgaAside></OrgaAside>
                </Sider>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 280,
                    }}
                    >
                        
                        {renderRoutes(route.routes)}
                </Content>
            </Layout>
        </Fragment>
        
    )
}


// export default Orga;
export default inject('darthOrgStore')(observer(Orga))