/*eslint-disable*/
import React from "react";
// import "./index.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import {OrganListAdd} from "../api/organ" ;
import store from "../../store/store"
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
// const [form] = Form.useForm();
class AddorganForm extends React.Component{
    
    constructor(props){
        // 初始化props的值
        super(props);
        this.state = {
            fromvalue: {
                title: "highername",
                key: "higherid",
                children: {
                    title: "selfname",
                    key: "selfid",
                }
            }
        }
    };
    // this.props.username 每次都会去获取
    // componentWillUnmount(value){
    //     this.setState({
    //         username: value.name
    //     })
    //     console.log(value)
    // }
    onFinish = (values) => {
        console.log("Received values of form: ", values);
        store.addOrganlist(values)
        this.props.handleCancel();
        // OrganListAdd(values).then(response => {
        //     console.log(response)
        //     this.props.handleCancel();
        //     // this.props.history.push('/index')
        // }).catch(error => {
        //     console.log(error)
        // })
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
    render(){
        return (
            <div className="login-frombox">
                <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="机构名称"
                    name={this.state.fromvalue.children.title}
                    rules={[{ required: true, message: '请输入机构名称!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="上级机构"
                    name={this.state.fromvalue.title}
                    rules={[{ required: true, message: '请输入上级机构!' }]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                    {/* <Button htmlType="button" onClick={onReset}>
                    Reset
                    </Button> */}
                </Form.Item>
                </Form>
            </div>
        );
    }
};

export default AddorganForm;
