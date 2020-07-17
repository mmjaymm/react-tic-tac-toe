import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './components/Board';
import Calculator from './components/calculator/Calculator';

const App = () =>
{
  return (
    <div className="container-fluid">
      {/* <Switch>
        <Route path="/calculator"> */}
      <Calculator />
      {/* </Route>
      </Switch> */}
    </div>
  );
}

export default App;
