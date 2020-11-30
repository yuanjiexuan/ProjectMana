import React,{Fragment} from 'react';
import { Menu } from 'antd';
import prorouter from "../router/index";
import prostore from "../store/store";
const { SubMenu } = Menu;
class Proaside extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    componentDidMount(){
        prostore.getProlist()
    }
    selectKey(key){
        prostore.searchproList(key)
    }
    render(){
        return (
            <Fragment>
                <Menu 
                    mode="inline" 
                    style={{ width: 200,height: "80vh" }} 
                    defaultOpenKeys={[prorouter[0].key]}
                    defaultSelectedKeys={[prorouter[0].children[0].key]}
                    >
                    <SubMenu key={prorouter[0].key} title={prorouter[0].title}>   
                        {
                            prorouter[0].children && prorouter[0].children.map(Item=> {
                                return <Menu.Item key={Item.key} onClick={()=>this.selectKey(Item.key)}>{Item.title}</Menu.Item>
                            })
                        }
                    </SubMenu>
                </Menu>
            </Fragment>
        )
    }
}
export default Proaside;