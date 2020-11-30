import React,{Fragment} from "react";
import { Breadcrumb } from 'antd';
import { BlockOutlined } from '@ant-design/icons';
import LoadMoreList from "./iterastatelist"
class Irerasurvey extends React.Component{
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
            <div className="pro-box">
                <div className="pro-item">
                    <div className="pro-icon">
                        <BlockOutlined style={{fontSize: "22px"}}/>
                    </div>
                    <div>
                        <p>USER-SERVICE</p>
                        <p>用户中心</p>
                    </div>
                </div>
                <div className="pro-item">
                    <div className="pro-icon">
                        <BlockOutlined style={{fontSize: "22px"}}/>
                    </div>
                    <div>
                        <p>USER-SERVICE</p>
                        <p>用户中心</p>
                    </div>
                </div>
                <div className="pro-item">
                    <div className="pro-icon">
                        <BlockOutlined style={{fontSize: "22px"}}/>
                    </div>
                    <div>
                        <p>USER-SERVICE</p>
                        <p>用户中心</p>
                    </div>
                </div>
                <div className="pro-item">
                    <div className="pro-icon">
                        <BlockOutlined style={{fontSize: "22px"}}/>
                    </div>
                    <div>
                        <p>USER-SERVICE</p>
                        <p>用户中心</p>
                    </div>
                </div>
            </div>
            <div className="pro-state">
                <p>迭代动态</p>
                <div>
                    <LoadMoreList></LoadMoreList>
                </div>
            </div>
        </Fragment>
        )
    }
}
export default Irerasurvey;  