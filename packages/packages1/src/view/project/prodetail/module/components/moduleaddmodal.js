import React from "react";
import { Modal, Button,Form,Input } from 'antd';
import modulestore from "../modulestore/modulestore";
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
const Moduleaddddmodal = (props) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
        if(props.type === "edit"){
            modulestore.searchmoduleList(props.id,props.type).then((res)=> {
                form.setFieldsValue({
                    modulename: modulestore.searchmodule[0].modulename,
                    modulecode: modulestore.searchmodule[0].modulecode
                })
            })
        }
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        if(props.type ==="add"){
            modulestore.addmodulelist(values)
        }else {
            values.key= props.id;
            modulestore.editmoduleList(values)
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
                        label="模块名称"
                        name="modulename"
                        rules={[
                        {
                            required: true,
                            message: '请输入模块名称',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="模块编码"
                        name="modulecode"
                        rules={[
                        {
                            required: true,
                            message: '请输入模块编码',
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

export default Moduleaddddmodal;