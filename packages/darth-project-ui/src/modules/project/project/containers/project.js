import React, {useEffect} from 'react';
import Proaside from "../components/projectAside";
import Proaside1 from "../components/projectAside1";
import { Layout } from 'antd';
import Procontent from "../components/projectContent";

import "../../common/components/project.scss";
import {observer, inject} from "mobx-react";
const { Sider } = Layout;
const Project=(props)=>{
    const {darthProStore} = props;
    const {getProlist,addProlist,deleproList,updateProject,searchproList,searchpro,prolist} = darthProStore;
    //初始化获取项目列表
    useEffect(() => {
        getProlist()
    }, [])

    return (
        <div className="darth-project">
            <Layout style={{height:'80vh'}}>
                <Sider style={{height:'80vh'}}>
                    <Proaside></Proaside>
                </Sider>
                {/* <Sider style={{height:'80vh'}}>
                    <Proaside1></Proaside1>
                </Sider> */}
                <Layout style={{background: "#fff",padding: "10px 10px"}}>
                    <Procontent 
                        getProlist={getProlist} 
                        addProlist={addProlist} 
                        deleproList={deleproList} 
                        updateProject={updateProject} 
                        searchproList={searchproList} 
                        prolist={prolist} 
                        searchpro={searchpro}
                    >
                    </Procontent>
                </Layout>
            </Layout>
        </div>

    )
}
export default inject('darthProStore')(observer(Project));
// export default Project