import React from 'react';
import {Switch,Redirect } from "react-router-dom"
import PrivateRouter from '../../../../../../components/privateRouter/index';
import Itererasurvey from "../components/itedeatilsurvey";
import Itepanel from "../itepanel/index";
import Iteaffair from "../iteaffair/index";
import Itestatistics from "../itestatistics/index";
class Iteradetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return (
            <Switch>
                <Redirect path="/index/iterationdetail/:id" exact={true} to="/index/iterationdetail/:id/itererasurvey"/>
                <PrivateRouter component={Itererasurvey} path="/index/iterationdetail/:id/itererasurvey"></PrivateRouter>
                <PrivateRouter component={Itepanel} path="/index/iterationdetail/:id/itererapanel"></PrivateRouter>
                <PrivateRouter component={Iteaffair} path="/index/iterationdetail/:id/itereraaffair"></PrivateRouter>
                <PrivateRouter component={Itestatistics} path="/index/iterationdetail/:id/itererastatistics"></PrivateRouter>
            </Switch>
        )
    }
}
export default Iteradetail;