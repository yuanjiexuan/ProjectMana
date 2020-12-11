
import './App.css';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import {Provider} from 'mobx-react'
import routes from  './routes';
import{orgStores} from "darth-orga-ui";
import {store,storeContext } from "./stores"
import { renderRoutes } from "react-router-config";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const allStore = { ...orgStores}
    return (
        <Provider {...allStore} {...store}>
          {/* <storeContext.Provider value={store}> */}
            <BrowserRouter >
                  {renderRoutes(routes)}
              </BrowserRouter>
          {/* </storeContext.Provider> */}
            
        </Provider>
    );
  }
}
export default App;
