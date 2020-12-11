import React,{Fragment} from 'react';
import "../../../../assets/font-icon/iconfont.css";
import {withRouter} from "react-router-dom";
import { Layout,Button } from "antd";
import { Modal } from 'antd';
const {Sider} = Layout;
class ProdeAside extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // proid: this.props.match.params.id,
            selectKey: `/index/prodetail/${this.props.match.params.id}/survey`,
            isShowText: true,
            selectProject: false,
            prorouter:[
                {
                    title: '概况',
                    icon: 'iconsmile',
                    key: `/index/prodetail/${this.props.match.params.id}/survey`
                },
                {
                    title: '仪表盘',
                    icon: 'iconcompass',
                    key: `/index/prodetail/${this.props.match.params.id}/panel`
                },
                {
                    title: '事务',
                    icon: 'icondashboard',
                    key: `/index/prodetail/${this.props.match.params.id}/affair`
                },
                {
                    title: '迭代',
                    icon: 'icontrademark',
                    key: `/index/prodetail/${this.props.match.params.id}/sprint`
                },
                {
                    title: '模块',
                    icon: 'iconreloadtime',
                    key: `/index/prodetail/${this.props.match.params.id}/module`
                },
                {
                    title: '成员',
                    icon: 'icondashboard',
                    key: `/index/prodetail/${this.props.match.params.id}/user`
                },
                {
                    title: '统计',
                    icon: 'iconsetting',
                    key: `/index/prodetail/${this.props.match.params.id}/statistics`
                }
            ],
            visible: false,
            confirmLoading: false
        }
    }
    componentDidMount(){
        this.setState({
            selectKey: this.props.location.pathname
        })
    }
    //选择左侧菜单
    selectKey = (key)=>{
        this.setState({
            selectKey: key
        })
        this.props.history.push(key)
    }
    //折叠菜单
    toggleCollapsed = ()=> {
        this.setState({
            isShowText: !this.state.isShowText
        })
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    };
    handleCancel = () => {
        this.setState({
            visible: false
        })
    };

    //切换项目
    selectProject=(id)=> {
        this.props.searchpro(id);
        this.setState({
            confirmLoading: false,
            visible: false
        })
        this.props.history.push(`/index/prodetail/${id}/survey`)
        console.log(id)
    }
    handleMouseOver=(id)=>{
        this.setState({
            selectProject: id
        })
    }
    handleMouseOut= ()=> {
        this.setState({
            selectProject: ""
        })
    }
    render(){
        const {prorouter,selectKey,isShowText,confirmLoading,visible,selectProject}= this.state
        return(
            <Fragment>
                <Sider trigger={null} collapsible collapsed={!this.state.isShowText} collapsedWidth = "50" width="180">
                    <div className={`project-aside ${isShowText ? "": "project-icon"}`}>
                        <div className="project-title title">
                            <span className={`${isShowText ? "": "project-notext"}`} style={{marginRight: "20px"}}>
                                <i className="iconfont icondashboard"></i>
                                {this.props.projectName}
                            </span>
                            <div className="project-toggleCollapsed" onClick={this.showModal}>
                                <i className="iconfont iconorderedlist" style={{color:"#2d90f9"}}></i>
                            </div>
                        </div>
                        <ul className="project-menu" onClick={this.selectMenu}>
                            {
                                prorouter && prorouter.map(Item=> {
                                    return  <div className={`project-menu-submenu ${Item.key=== selectKey ? "project-menu-select" : ""}`} 
                                                key={Item.key} 
                                                onClick={()=>this.selectKey(Item.key)}
                                            >
                                                    <i className={`iconfont ${Item.icon}`}></i>
                                                    <span className={`${isShowText ? "": "project-notext"}`}>
                                                        {Item.title}
                                                    </span>
                                                    
                                            </div>
                                })
                            }
                        </ul>
                        <div className="project-title setting">
                            <span className={`${isShowText ? "": "project-notext"}`} style={{marginRight: "20px"}}>
                                <i className="iconfont icondashboard"></i>
                                项目设置
                                
                            </span>
                            <div className="project-toggleCollapsed" onClick={this.toggleCollapsed}>
                                <i className="iconfont iconindent" style={{color:"#2d90f9"}}></i>
                            </div>
                        </div>
                    </div>
                </Sider>
                <div >
                    <Modal
                        className="project-modal"
                        title="选择项目"
                        visible={visible}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        footer={[
                        <Button  key="back" onClick={this.handleCancel}>取消</Button>  ]}
                    >
                        {
                            this.props.prolist && this.props.prolist.map((item)=>{
                                return <div className={`project-name ${item.id=== selectProject? "project-selectName": ""}`}
                                            onClick={()=>this.selectProject(item.id)} 
                                            key={item.id}
                                            onMouseOver={()=>this.handleMouseOver(item.id)}
                                            onMouseOut={this.handleMouseOut}
                                        >{item.projectName}</div>
                            })
                        }
                        
                    </Modal>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(ProdeAside);