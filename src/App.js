import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

//komponenter
import NavBarMenu from "./components/NavBarMenu.js";
import Container from 'react-bootstrap/Container';
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu/>
        <Container>
          <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Contact} path="/contact"/>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
