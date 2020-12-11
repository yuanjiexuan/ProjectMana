import React,{Fragment} from 'react';
import { DownOutlined,ConsoleSqlOutlined } from '@ant-design/icons';
const prorouter = [
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
class Proaside extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: true
        }
    }
    
    hiddenMenu=()=> {
        const timer = setTimeout(()=> {
            this.setState({
                showMenu : !this.state.showMenu
            })
        },300)
        // clearInterval(timer);
    }
    //选择菜单项
    selectMenu=(e)=> {
        const menu = e.target.parentNode.childNodes;
        menu.forEach((item)=> {
            item.classList.remove("project-menu-select")
        })
        e.target.classList.add("project-menu-select");

    }
    // 
    selectKey(key){
        // ProStore.searchproList(key)
    }
    render(){
        const {showMenu}= this.state
        return(
            <Fragment>
                <div className="project-aside">
                    <div className="project-title" onClick={this.hiddenMenu}>
                        <div>
                            <ConsoleSqlOutlined style={{fontSize: "14px"}}/> 项目
                        </div><DownOutlined style={{fontSize: "10px"}}/>
                    </div>
                    <ul className={`project-menu ${!showMenu? "hidden-menu": ""}`} onClick={this.selectMenu}>
                        {
                            prorouter && prorouter.map(Item=> {
                                return <li className="project-menu-submenu" key={Item.key} onClick={()=>this.selectKey(Item.key)}>
                                    {Item.title}
                                </li>
                            })
                        }
                    </ul>
                </div>
                
            </Fragment>
        )
    }
}
export default Proaside;