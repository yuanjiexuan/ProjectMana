import React from "react";
import { Modal, Button,Form,Input } from 'antd';
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
const ProjectAddmodal = (props) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);
    const {searchpro } = props;
    const showModal = () => {
        setVisible(true);
        if(props.type !== "add"){
            searchpro(props.id).then((response)=> {
                console.log(response)
                form.setFieldsValue({   
                    projectName: response.projectName,
                    id: response.id,
                    desc: response.desc
                })
            })
        }
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        if(props.type === "add"){
            props.addProlist(values)
        }else {
            props.updateProject(values)
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
            {
                props.type==="edit"?<Button type="primary" onClick={showModal}>
                        +{props.name}
                    </Button>: <span onClick={showModal} style={{color: "#1890ff"}}>{props.name}</span>
            }
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
                        name="projectName"
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
                        name="id"
                        rules={[
                        {
                            required: false,
                            message: '请输入项目编码',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="项目描述"
                        name="desc"
                        rules={[
                        {
                            required: false,
                            message: '请输入项目描述',
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

export default ProjectAddmodal;