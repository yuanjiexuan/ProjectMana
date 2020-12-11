
// import React from 'react';

import Login from "./modules/login/login";
import Orga from "./modules/orga/containers/orga";
import Index from "./modules/home/index";
import Home from "./modules/home/home";
import {Project} from "./modules/project/project";
// 项目详情
import ProjectDetail from "./modules/project/common/containers/prodetail";
import {Survey,Sprint,Module,Panel,Affair,User,Statistics} from "./modules/project/common";
//组织中心
import {DarthOrgContent,DarthUser} from "darth-orga-ui";
//迭代
import Itetationhome from "./modules/sprint/common/containers/sprint"
import Itererasurvey from "./modules/sprint/sprint-survey/sprintSurvey";
import Itepanel from "./modules/sprint/sprint-panel/sprintPanel";
import Iteaffair from "./modules/sprint/sprintAffair/sprintAffair";
import Itestatistics from "./modules/sprint/sprint-statistics/sprintStatistics";

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
                path: "/index/organ",
                component: Orga,
                key: 'Orga',
                routes: [
                    {
                        path: "/index/organ/organ",
                        component: DarthOrgContent,
                        exact: true
                    },
                    {
                        path: "/index/organ/user",
                        component: DarthUser,
                        exact: true
                    }
                ]
            },
            {
                path: "/index/prodetail/:id",
                component: ProjectDetail,
                routes: [
                    {
                        path: "/index/prodetail/:id/survey",
                        component: Survey,
                    },
                    {
                        path: "/index/prodetail/:id/sprint",
                        component: Sprint
                
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
            {
                path: "/index/sprintdetail/:id",
                component: Itetationhome,
                routes: [
                    {
                        path: "/index/sprintdetail/:id/itererasurvey",
                        component: Itererasurvey,
                    },
                    {
                        path: "/index/sprintdetail/:id/itererapanel",
                        component: Itepanel
                
                    },
                    {
                        path: "/index/sprintdetail/:id/itereraaffair",
                        component: Iteaffair,
                    },
                    {
                        path: "/index/sprintdetail/:id/itererastatistics",
                        component: Itestatistics,
                    }
                ]
            },
        ]
    },
    
]
export default routes;