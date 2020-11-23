
import React from "react";
import { Input } from 'antd';
import store from "../../store/store";
import { observer } from "mobx-react";
import "./contop.scss"

@observer
class Contop extends React.Component{
    formRef = React.createRef();
    componentDidMount(){}
    
    render(){
        return (
            <div className="form-top">
                <div>机构名称：<Input value={store.selectlist.title}></Input></div>
                <div>上级机构：<Input value={store.selectlist.fatitle}></Input></div>
            </div>
        );
    }
};

export default Contop;