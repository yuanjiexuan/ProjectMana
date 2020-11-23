import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
import store from "../view/orga/store/store"
class Headerself extends React.Component{
    // constructor(props){
    //     super(props);
    //     // this.state()
    // }
    changeRouter(data){
        store.changeKey(data)
    }
    render(){
        return (
            <Fragment>
                <div className="logo" />
                    <div className="logo-right">
                        <div onClick={()=>this.changeRouter("/index/organ")}>
                            <Link to="/index/organ" className="jump">组织管理</Link>
                        </div>
                        <div onClick={()=>this.changeRouter("/index/user")}>
                            <Link to="/index/user" className="jump">
                                系统管理
                            </Link>
                        </div>
                    </div>
                    <div className="search">
                        <input type="text"/>
                    </div>
                    <div>
                        应用中心
                    </div>
                    <div className="header-img">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                    <div className="loginout">
                        <Link to="/" className="jump">退出</Link>
                    </div>
            </Fragment>
        )
    }
    
}
export default Headerself;