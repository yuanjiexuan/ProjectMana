import React from 'react';
import {Switch,Redirect } from "react-router-dom"
import PrivateRouter from '../../../../components/privateRouter/index';
import Survey from "../components/survey";
import Iteration from "../iteration/iteration";
import Module from "../module/module";
import Panel from "../panel/index";
import Affair from "../affair/index";
import User from "../user/index";
import Statistics from "../statistics/index"
class Projectdetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return (
            <Switch>
                <Redirect path="/index/prodetail/:id" exact={true} to="/index/prodetail/:id/survey" />
                <PrivateRouter  component={Survey} path="/index/prodetail/:id/survey"></PrivateRouter>
                <PrivateRouter  component={Iteration} path="/index/prodetail/:id/iteration"></PrivateRouter>
                <PrivateRouter  component={Module} path="/index/prodetail/:id/module"></PrivateRouter>
                <PrivateRouter  component={Panel} path="/index/prodetail/:id/panel"></PrivateRouter>
                <PrivateRouter  component={Affair} path="/index/prodetail/:id/affair"></PrivateRouter>
                <PrivateRouter  component={User} path="/index/prodetail/:id/user"></PrivateRouter>
                <PrivateRouter  component={Statistics} path="/index/prodetail/:id/statistics"></PrivateRouter>
            </Switch>
        )
    }
}
export default Projectdetail;