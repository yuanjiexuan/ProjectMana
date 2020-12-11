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
const ModuleAddmodal = (props) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = React.useState(false);
    const {editmoduleList,searchmoduleList,addmodulelist} = props;
    const showModal = () => {
        setVisible(true);
        if(props.type === "edit"){
            searchmoduleList(props.id,props.type).then((res)=> {
                form.setFieldsValue({
                    moduleName: res.moduleName,
                    id: res.id,
                    desc: res.desc
                })
            })
        }
    };

    const onFinish = (values) => {
        values.project={id:props.projectid};
        if(props.type ==="add"){
            addmodulelist(values)
        }else {
            values.id= props.id
            editmoduleList(values)
        }
        // ModuleStore.editmoduleList(values)
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
                props.type !== "edit"?<Button type="primary" onClick={showModal}>
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
                        label="模块名称"
                        name="moduleName"
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
                        label="模块描述"
                        name="desc"
                        rules={[
                        {
                            required: false,
                            message: '请输入模块描述',
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

export default ModuleAddmodal;