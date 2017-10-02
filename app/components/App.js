import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Results from './Results'
import DayDetails from './DayDetails'

const App = props => {
  return (
     <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/results' component={Results} />
           <Route path='/days/details' component={DayDetails} />
          <Route render={() => { return <p>Not Found</p> }} />
        </Switch>
      </div>
    </Router>

  );
};



export default App;