import React, { Component } from 'react';
import App from './App';
import { HashRouter , Route , Switch } from 'react-router-dom';

import Demo from './pages/demo';
import Admin from './admin';
// import Home from './pages/home';
import Login from './pages/login';
import ButtonPages from './pages/ui/button';
import NoMatch from './pages/nomatch';
import Message from './pages/ui/message';
import Tab from './pages/ui/tab';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loading';
import Notify from './pages/ui/notify';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/admin" render={()=>(
              <Admin>
                <Route path="/admin/demo" component={Demo} />
                <Route path="/admin/ui/buttons" component={ButtonPages} />
                <Route path="/admin/ui/message" component={Message} />
                <Route path="/admin/ui/tabs" component={Tab} />
                <Route path="/admin/ui/modals" component={Modals} />
                <Route path="/admin/ui/loading" component={Loading} />
                <Route path="/admin/ui/notify" component={Notify} />
                {/* <Route component={NoMatch} /> */}
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