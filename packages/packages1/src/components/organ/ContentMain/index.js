import React from 'react';
// import { Switch  } from 'antd';
import {Switch } from "react-router-dom"
import PrivateRouter from '../../privateRouter/index';
import {DarthOrgContent,DarthUser} from "darth-orga-ui";
// import Organ from "../../../view/orga/components/Treemenu/tree";
// import User from "../../../view/user/userindex";
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
                <PrivateRouter  component={DarthOrgContent} path="/index/organ/organ"></PrivateRouter>
                <PrivateRouter component={DarthUser} path="/index/organ/user"></PrivateRouter>
            </Switch>
        )
    }
}
export default BsideMenu;