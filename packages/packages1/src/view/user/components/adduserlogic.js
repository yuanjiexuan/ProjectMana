import React from "react";
import { Button,Modal } from 'antd';
import AdduserForm from './adduserfrom';
// import userstore from "../store/userstore";
// class Logic extends React.Component{
const Adduserlogic = (props) => {
    const showModal = () => {
        setVisible(true);
        
    };
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading] = React.useState(false);
    

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
        
    return (
        <>
        <Button type="primary" onClick={showModal}>
            +{props.name}
        </Button>
        <Modal
            title={props.name}
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
        >
            <AdduserForm handleCancel={handleCancel} id={props.id}></AdduserForm>
        </Modal>
        </>
    );
    // }
};

export default Adduserlogic;