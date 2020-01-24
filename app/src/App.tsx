import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './view/Home'

import Portfolio from './view/Portfolio';


const App = () => {
  return (
    <> 
      {/* <Route component={Nav} /> */}
      <Route />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        {/* <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} /> */}
      </Switch>
    </>
  );
}

export default App;
