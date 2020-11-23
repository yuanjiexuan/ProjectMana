
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import {Switch, Route, HashRouter} from "react-router-dom";
import Home from "./view/login/login";
import Organ from "./view/orga/index";
import Lnit from "./view/home/index"
// 私有组件方法
import PrivateRouter from './components/privateRouter/index';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route component={Home} exact path="/" />
            {/* <Route component={Organ} path="/organ" /> */}
            <PrivateRouter component={Organ} path="/index"></PrivateRouter>
            <PrivateRouter component={Lnit} path="/lnit"></PrivateRouter>
          </Switch>
        </HashRouter>
    );
  }
}
export default App;
