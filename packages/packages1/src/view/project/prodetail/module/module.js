import React,{Fragment} from "react";
import { Breadcrumb,Input } from 'antd';
import Moduleaddddmodal from "./components/moduleaddmodal";
import Modulelist from "./components/modulelist";
import modulestore from "./modulestore/modulestore";
import { values } from "mobx";
const { Search } = Input;
class Module extends React.Component{
    onSearch=(values)=> {
        modulestore.searchmoduleList(values,"search")
    }
    render(){
        return (
        <Fragment>
            <Breadcrumb>
                <Breadcrumb.Item>模块管理</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">模块详情</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <hr/>
            <div className="search-add">
                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={this.onSearch}
                    style={{ width: 200, margin: '0 10px' }}
                />
                <Moduleaddddmodal name="添加模块" type="add" id="0"></Moduleaddddmodal>
            </div>
            <Modulelist></Modulelist>
        </Fragment>
        )
    }
}
export default Module;  