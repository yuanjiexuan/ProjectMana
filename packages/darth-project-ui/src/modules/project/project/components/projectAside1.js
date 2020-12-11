import React,{Fragment} from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
const prorouter = [
    {
        title: "项目",
        icon: 'home',
        key: '/index/project',
        children: [
            {
                title: '所有项目',
                icon: 'laptop',
                key: '1'
            },
            {
                title: '最近浏览的项目',
                icon: 'laptop',
                key: '2'
            }
            ,
            {
                title: '我创建的项目',
                icon: 'laptop',
                key: '3'
            }
            ,
            {
                title: '我参与的项目',
                icon: 'laptop',
                key: '4'
            }
            ,
            {
                title: '我关注的项目',
                icon: 'laptop',
                key: '5'
            }
        ]
    }
]
class Proaside1 extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    selectKey(key){
        // ProStore.searchproList(key)
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
export default Proaside1;