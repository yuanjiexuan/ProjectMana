import React from "react";
import { Modal, Button,Form,Input } from 'antd';
import iterationstore from "../iterationstore/iterationstore";
const layout = {
    labelCol: {
    span: 6,
    },
    wrapperCol: {
    span: 16,
    },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};
const Iterationaddddmodal = (props) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
        if(props.type === "edit"){
            iterationstore.searchiterationList(props.id,props.type).then((res)=> {
                form.setFieldsValue({
                    iterationname: iterationstore.searchiteration[0].iterationname,
                    iterationcode: iterationstore.searchiteration[0].iterationcode
                })
            })
        }
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        if(props.type ==="add"){
            iterationstore.additerationlist(values)
        }else {
            values.key= props.id;
            iterationstore.edititerationList(values)
        }
        
        setVisible(false);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onCancel = () => {
        form.resetFields();
        setVisible(false);
    };

    return (
        <>
        <div className="addmodel">
            <Button type="primary" onClick={showModal}>
                +{props.name}
            </Button>
            <Modal
                title="Title"
                visible={visible}
                footer={null}
                onCancel={onCancel}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="迭代名称"
                        name="iterationname"
                        rules={[
                        {
                            required: true,
                            message: '请输入迭代名称',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="迭代编码"
                        name="iterationcode"
                        rules={[
                        {
                            required: true,
                            message: '请输入迭代编码',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                        <Button htmlType="button" onClick={onCancel}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
        
        </>
    );
};

export default Iterationaddddmodal;