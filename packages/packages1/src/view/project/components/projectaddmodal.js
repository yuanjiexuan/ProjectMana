import React from "react";
import { Modal, Button,Form,Input } from 'antd';
import prostore from "../store/store";
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
const Addmodal = () => {
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        prostore.addProlist(values)
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
                +添加项目
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
                        label="项目名称"
                        name="proname"
                        rules={[
                        {
                            required: true,
                            message: '请输入项目名称',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="项目编码"
                        name="procode"
                        rules={[
                        {
                            required: true,
                            message: '请输入项目编码',
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

export default Addmodal;