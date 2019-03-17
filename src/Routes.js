import React, { Component } from 'react';
import App from './App';
import { HashRouter , Route , Switch, Redirect } from 'react-router-dom';

import Demo from './pages/demo';
import Admin from './admin';
import ButtonPages from './pages/ui/button';
import NoMatch from './pages/nomatch';
import Message from './pages/ui/message';
import Tab from './pages/ui/tab';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading';
import Notify from './pages/ui/notify';
import Swiper from './pages/ui/swiper';
import Login from './pages/form/login';
import Register from './pages/form/register';
import TableBasic from './pages/table';
import Animation from './pages/animation';
import Home from './pages/home';
import Common from './common';
import BaiduMap from './pages/map/baidumap';
import LoginPage from './pages/login';
import Bar from './pages/echarts/bar';
import City from './pages/city';
import Order from './pages/order';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path='/common' render={()=>(
              <Common>
                <Route path='/common/testmap' component={BaiduMap} />
                <Route path='/common/testcharts' component={Bar} />
              </Common>
            )} />
            <Route path="/" render={()=>(
              <Admin>
                <Switch>
                  <Route path='/home' component={Home} />
                  <Route path="/demo" component={Demo} />
                  <Route path="/ui/buttons" component={ButtonPages} />
                  <Route path="/ui/message" component={Message} />
                  <Route path="/ui/tabs" component={Tab} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/ui/loading" component={Loading} />
                  <Route path="/ui/notify" component={Notify} />
                  <Route path="/ui/swiper" component={Swiper} />
                  <Route path="/form/login" component={Login} />
                  <Route path="/form/reg" component={Register} />
                  <Route path='/table' component={TableBasic} />
                  <Route path='/animation' component={Animation} />
                  <Route path="/admin/city" component={City} />
                  <Route path='/admin/order' component={Order} />
                  <Redirect to="/home" component={Home} />
                </Switch>
              </Admin>
            )} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default Routes;