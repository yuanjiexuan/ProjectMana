import React,{Fragment} from "react";
import { Breadcrumb,Input } from 'antd';
import Iterationaddddmodal from "./components/iterationaddmodal";
import Iterationlist from "./components/iterationlist";
import iterationstore from "./iterationstore/iterationstore";
import { values } from "mobx";
const { Search } = Input;
class Iteration extends React.Component{
    onSearch=(values)=> {
        iterationstore.searchiterationList(values,"search")
    }
    render(){
        return (
        <Fragment>
            <Breadcrumb>
                <Breadcrumb.Item>迭代管理</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">迭代详情</a>
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
                <Iterationaddddmodal name="添加迭代" type="add" id="0"></Iterationaddddmodal>
            </div>
            <Iterationlist></Iterationlist>
        </Fragment>
        )
    }
}
export default Iteration;  