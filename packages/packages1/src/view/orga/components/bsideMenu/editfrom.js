/*eslint-disable*/
import React from "react";
import { Form, Input, Button } from "antd";
import store from "../../store/store";
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class EditorganForm extends React.Component{
    
    constructor(props){
        // 初始化props的值
        super(props);
        this.state = {
            name: "title"
        }
    };
    onFinish = (values) => {
        console.log("Received values of form: ", values);
        values.key= this.props.id
        store.editOrganlist(values)
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
        store.searchOrganlist(this.props.id,this.props.faid).then(()=>{
            this.formRef.current.setFieldsValue({
                title: store.selectlist.title,    
            })
        })
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
                    label="机构名称"
                    name={this.state.name}
                    rules={[{ required: true, message: '请输入机构名称!' }]}
                >
                    <Input />
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

export default EditorganForm;
