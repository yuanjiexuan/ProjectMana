/*eslint-disable*/
import React from "react";
import ReactDOM from "react-dom";
import "./loginfrom.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {Login} from "../../../api/login" ;
import {withRouter } from 'react-router-dom';
import { message } from 'antd';
class NormalLoginForm extends React.Component{
    constructor(props){
        // 初始化props的值
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    };
    info = (data) => {
        message.info(data);
    };
    onFinish = (values) => {
        console.log("Received values of form: ", values);
        Login(values).then(response => {
            console.log(response)
            if(response.data.error == 0){
                this.props.history.push('/lnit')
            }else {
                this.info(response.data.data)
            }
        }).catch(error => {
            console.log(error)
        })
    };
    inputChange = (e) => {
        let value = e.target.value;
        this.setState({
            username: value
        })
    };
    render(){
        const { username } = this.state.username;
        const { password } = this.state.password;
        return (
            
            <div className="login-frombox">
                <div className="login-title">用户登录</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: "请输入用户名!",
                            }
                        ]}
                    >
                        <Input
                            value={username}
                            onChange={this.inputChange}
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {required: true, message: "请输入登录密码!"},
                            
                        ]}
                    >
                    <Input
                        value={password}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                    </Form.Item>
                    <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    </Form.Item>

                    <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <a>register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
};

export default withRouter(NormalLoginForm);
