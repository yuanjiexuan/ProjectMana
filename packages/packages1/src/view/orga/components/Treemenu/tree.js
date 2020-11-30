import React,{Fragment} from 'react';
import { Layout  } from 'antd';
import Bside from "../BsideMenu/index";
import "./tree.scss"
import Conmid from "../Content/conmid"
import Logic from './addlogic';
const { Sider,Content } = Layout;
class Organ extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Fragment>
                <Layout className="organmidd">
                    <Sider width={200} className="site-layout-background">
                        <Bside></Bside>
                        <Logic name="添加组织" type="add"></Logic>
                    </Sider>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            margin: "0 24",
                            minHeight: 280,
                        }}
                        >
                        {/* <BcontentMain></BcontentMain> */}
                        <Conmid></Conmid>
                    </Content>
                </Layout>
            </Fragment>
        );
    }
}

export default Organ;