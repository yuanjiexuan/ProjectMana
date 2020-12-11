import React,{Fragment} from 'react';
import logo from "../../assets/images/logo.jpg";
import { renderRoutes } from "react-router-config";
import {Portal} from 'darth-portal-ui';
class Index extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            headerRouter:[
                {
                    to:'/index/home',
                    title: '首页',
                    key: 'home'
                },
                {
                    to:'/index/project',
                    title:'项目',
                    key: 'project'
                },
                {
                    to:'/index/prodetail',
                    title:'迭代',
                    key: 'dd'
                },
                {
                    to:'/1',
                    title:'事项',
                    key: 'sx'
                },
                {
                    to:'/2',
                    title:'日志',
                    key: 'rz'
                },
                {
                    to:'/index/organ',
                    title:'系统管理',
                    key: 'Orga'
                }
            ]
        }
    }
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        const route = this.props.route
        return (
            <Fragment>
                <div>
                    <Portal 
                        routers={this.state.headerRouter}
                        {...this.props}
                        redirect={'/'}
                        logo={logo}
                    >
                        
                        {renderRoutes(route.routes)}
                    </Portal>
                </div>
            </Fragment>
        );
    }
}

export default Index;