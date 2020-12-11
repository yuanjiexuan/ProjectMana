import React from "react";
import {PortalLogin} from 'darth-portal-ui'
import logo from "../../assets/images/logo.jpg";
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render(){
        return (
            <div>
                <PortalLogin 
                    contentImg={logo}
                    {...this.props}
                    loginGoRouter={'/index/home'}
                >
                </PortalLogin>
            </div>
        )
    }
}
export default Login;