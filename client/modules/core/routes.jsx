import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';

import MainLayout from './components/MainLayout.jsx';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const history = createHistory();

  Meteor.startup(() => {
    ReactDOM.render(
      (<Router history={history}>
        <Switch>
          <MainLayoutCtx>
            <Switch>
              <Route path="/" exact render={() => <div>Home</div>} />
            </Switch>
          </MainLayoutCtx>
        </Switch>
      </Router>),
      document.querySelector('#reactRoot'),
    );
  });
}
