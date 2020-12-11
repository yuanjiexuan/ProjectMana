import { createContext } from 'react';
import {DARTH_PRO_STORE,ProStore} from "./modules/project/project/store/projectStore";
import {DARTH_MODULE_STORE, ModuleStore} from "./modules/project/module/store/moduleStore";
import {DARTH_USER_STORE, UserStore} from "./modules/project/user/store/userStore";
function createStores() {
    return {
        [DARTH_PRO_STORE]:new ProStore(),
        [DARTH_MODULE_STORE]:new ModuleStore(),
        [DARTH_USER_STORE]:new UserStore()
    };
}

const store = createStores();

const storeContext = createContext(store);

export {
    store,
    storeContext
}