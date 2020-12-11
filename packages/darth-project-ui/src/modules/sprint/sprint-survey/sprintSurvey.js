import React,{Fragment} from "react";
import { Breadcrumb } from 'antd';
import { BlockOutlined } from '@ant-design/icons';
import { List, Avatar } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
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
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                    )}
                />
                </div>
            </div>
        </Fragment>
        )
    }
}
export default Irerasurvey;  