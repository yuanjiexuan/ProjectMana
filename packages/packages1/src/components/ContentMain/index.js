import React from 'react';
// import { Switch  } from 'antd';
import {Switch } from "react-router-dom"
import PrivateRouter from '../privateRouter/index';
import Organ from "../../view/orga/components/Organmidmain/index";
import User from "../../view/user/userindex";
// import UserAdd from "../../view/user/useradd";
// 私有路由

class BsideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return (
            <Switch>
                <PrivateRouter  component={Organ} path="/index/organ"></PrivateRouter>
                <PrivateRouter exact component={User} path="/index/user"></PrivateRouter>
                {/* <PrivateRouter exact component={UserAdd} path="/index/user/add"></PrivateRouter> */}
            </Switch>
        )
    }
}
export default BsideMenu;