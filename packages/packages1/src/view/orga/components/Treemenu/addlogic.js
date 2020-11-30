import React from "react";
import { Button,Modal } from 'antd';
import AddorganFrom from './addorgan';
import EditorganForm from "../BsideMenu/editfrom"
// class Logic extends React.Component{
const Logic = (props) => {
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
        {props.type === "add"
                ? <Button type="primary" onClick={showModal} block>
                        +{props.name}
                    </Button>
                : <span onClick={showModal}>
                        {props.name}
                    </span>
            }
        
        <Modal
            title={props.name}
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
        >
            {props.type === "add"
                ? <AddorganFrom handleCancel={handleCancel}></AddorganFrom>
                : <EditorganForm handleCancel={handleCancel} id={props.id} faid={props.faid}></EditorganForm>
            }
            
        </Modal>
        </>
    );
    // }
};

export default Logic;