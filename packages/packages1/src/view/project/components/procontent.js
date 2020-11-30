import React,{Fragment} from "react";
import { Breadcrumb,Input } from 'antd';
import Addmodal from "./projectaddmodal";
import Profrom from "./prolist";
import Prostore from "../store/store"
const { Search } = Input;
class Procontent extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    onSearch = value => {
        Prostore.searchpro(value)
    };
    render(){
        return (
            <Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item>项目管理</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">项目列表</a>
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
                    <Addmodal></Addmodal>
                </div>
                <div>
                    <Profrom></Profrom>
                </div>
                

            </Fragment>
        )
    }
}
export default Procontent;