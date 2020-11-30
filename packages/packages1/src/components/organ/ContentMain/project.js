import React from 'react';
import {Switch,Redirect } from "react-router-dom"
import PrivateRouter from '../../privateRouter/index';
import Home from "../../../view/home/home";
import Project from "../../../view/project/index";
import Prodetail from "../../../view/project/prodetail/index";
import Organ from "../../../view/orga/index"
import Iterationdetail from "../../../view/project/prodetail/iteration/iterationdetail/iterationdetail";
// import User from "../../../view/user/userindex";

class BsideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return (
            <Switch>
                <Redirect path="/index" exact={true} to="/index/home" />
                <PrivateRouter component={Home} path="/index/home"></PrivateRouter>
                <PrivateRouter component={Project} path="/index/project"></PrivateRouter>
                <PrivateRouter component={Organ} path="/index/organ"></PrivateRouter>
                <PrivateRouter component={Prodetail} path="/index/prodetail/:id"></PrivateRouter>
                <PrivateRouter component={Iterationdetail} path="/index/iterationdetail/:id"></PrivateRouter>
            </Switch>
        )
    }
}
export default BsideMenu;