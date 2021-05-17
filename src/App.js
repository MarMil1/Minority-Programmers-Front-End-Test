import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/home-page/Homepage";
import Startup from "./components/startup/Startup";
import Learn from "./components/learn/Learn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/Minority-Programmers-Front-End-Test">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/startup/:id" component={Startup} />
          <Route exact path="/learn" component={Learn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
