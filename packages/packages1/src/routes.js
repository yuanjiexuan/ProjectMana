
// import React from 'react';
import {Redirect} from 'react-router-dom';
import Login from "./view/login/login";
import Organ from "./view/orga/index";
import Index from "./view/home/index";
import Home from "./view/home/home";
import Project from "./view/project/index";
// 项目详情
import prodetail from "./view/project/prodetail/index";
import Survey from "./view/project/prodetail/components/survey";
import Iteration from "./view/project/prodetail/iteration/iteration";
import Module from "./view/project/prodetail/module/module";
import Panel from "./view/project/prodetail/panel/index";
import Affair from "./view/project/prodetail/affair/index";
import User from "./view/project/prodetail/user/index";
import Statistics from "./view/project/prodetail/statistics/index";

const routes=[
    {
        path: "/",
        exact: true,
        component: Login,
    },
    {
        path: "/index",
        component: Index,
        routes: [
            {
                path: "/index/home",
                exact: true,
                component: Home,
                key: 'home'
            },
            {
                path: "/index/project",
                exact: true,
                component: Project,
                key: 'project'

            },
            {
                path: "/index/Organ",
                exact: true,
                component: Organ,
                key: 'organ'
            },
            {
                path: "/index/prodetail/:id",
                component: prodetail,
                routes: [
                    {
                        path: "/index/prodetail/:id/survey",
                        component: Survey,
                    },
                    {
                        path: "/index/prodetail/:id/iteration",
                        component: Iteration
                
                    },
                    {
                        path: "/index/prodetail/:id/module",
                        component: Module,
                    },
                    {
                        path: "/index/prodetail/:id/panel",
                        component: Panel,
                    },
                    {
                        path: "/index/prodetail/:id/affair",
                        component: Affair,
                    },
                    {
                        path: "/index/prodetail/:id/user",
                        component: User,
                    },
                    {
                        path: "/index/prodetail/:id/statistics",
                        component: Statistics,
                    }
                ]
            },
        ]
    },
    
]
export default routes;