/*eslint-disable*/
import React from "react";
import { Form, Input, Button,Select } from "antd";
import userstore from "../store/userstore"
import Search from "antd/lib/input/Search";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class AdduserForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: "username",
            account: "account",
            usertype: "usertype",
            fororgan: "fororgan"
        }
    };
    onFinish = (values) => {
        // console.log("Received values of form: ", values);
        console.log(this.props.id)
        if(this.props.id!="1"&&this.props.id !=="0"){
            values.key = this.props.id;
            // console.log(values)
            userstore.editUserList(values)
        }
        if(this.props.id =="0") {
            userstore.addUserList(values)
        }
        
        this.props.handleCancel();
    };
    onReset = () => {
        // form.resetFields();
    };
    inputChange = (e) => {
        let value = e.target.value;
        this.setState({
            username: value
        })
    };
    componentDidMount(){
        if(this.props.id!="1"&&this.props.id !=="0"){
            console.log(123)
            userstore.searchUser(this.props.id).then((res)=> {
                this.formRef.current.setFieldsValue({
                    username: userstore.userInfo.username,
                    account: userstore.userInfo.account,
                    usertype: userstore.userInfo.usertype,
                    fororgan: userstore.userInfo.fororgan,
                })
            }).catch((err)=> {
                console.log(err)
            })
        }
    }
    formRef = React.createRef()
    render(){
        return (
            <div className="login-frombox">
            
                <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                ref={this.formRef}
            >
                <Form.Item
                    label="用户名"
                    value={this.state.username}
                    rules={[{ required: true, message: '请输入用户名!' }]}
                    name="username"

                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="账号"
                    value={this.state.account}
                    rules={[{ required: true, message: '请输入账号!' }]}
                    name="account"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="用户类型"
                    value={this.state.usertype}
                    rules={[{ required: true, message: '请输入用户类型!' }]}
                    name="usertype"
                >
                    <Select>
                        <Select.Option value="内部">内部</Select.Option>
                        <Select.Option value="第三方">第三方</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="所属组织"
                    value={this.state.fororgan}
                    rules={[{ required: true, message: '请输入所属组织!' }]}
                    name="fororgan"
                >
                    <Select>
                        <Select.Option value="技术研发中心">技术研发中心</Select.Option>
                        <Select.Option value="市场营销中心">市场营销中心</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
                </Form>
            </div>
        );
    }
};

export default AdduserForm;
