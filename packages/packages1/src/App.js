
import './App.css';
import React from 'react';
import { BrowserRouter} from "react-router-dom";
import {Provider} from 'mobx-react'
import routes from  './routes';
import{orgStores} from "darth-orga-ui";
import { renderRoutes } from "react-router-config";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const allStore = { ...orgStores}
    return (
      <Provider {...allStore}>
      <BrowserRouter >
          {/* <Switch> */}
          {renderRoutes(routes)}
            {/* <Route component={Login} exact path="/" />
            <PrivateRouter component={Home} path="/index"></PrivateRouter>
            <PrivateRouter component={Project} path="/project"></PrivateRouter> */}
          {/* </Switch> */}
        </BrowserRouter>
                
      </Provider>
    );
  }
}
export default App;
