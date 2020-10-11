import React from 'react';
import './App.css';
import Search from "./pages/Search";
import Results from "./pages/Results";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
