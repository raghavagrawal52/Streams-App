import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Delete from './components/streams/Delete';
import Edit from './components/streams/Edit';
import Show from './components/streams/Show';
import List from './components/streams/List';
import Header from './Header';
import history from './history';
// import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={List} />
              <Route path="/streams/new" exact component={Create} />
              <Route path="/streams/edit/:id" exact component={Edit} />
              <Route path="/streams/delete/:id" exact component={Delete} />
              <Route path="/streams/:id" exact component={Show} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
