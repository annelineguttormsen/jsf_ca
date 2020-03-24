import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './App.css';

//bootstrap komponenter
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

//komponenter
import NavBarMenu from "./components/NavBarMenu.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu/>
        <Container fluid>
          <Switch>
            <Route component={Home} path="/" exact/>
            <Route component={Contact} path="/contact"/>
            <Route path="/game/:id" children={<GameDetails/>} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

function GameDetails() {
  let { id } = useParams();

  const [gameDetails, updateGameDetails] = useState({
      gameDetailsArray: []
  });

  useEffect(
      function() {
          fetch("https://api.rawg.io/api/games")
          .then(response => response.json())
          .then(response => response = response.results)
          .then(function(gameDetailsArray){ 
            updateGameDetails({gameDetailsArray: gameDetailsArray});
          })
      }, []
  );

  let currentGame = gameDetails.gameDetailsArray.find(
    function(index) {
      return index.id == {id}.id;
    }
  );
  console.log("Current game", currentGame);

  if (currentGame !== undefined) {
    return (
      <Col lg={12}>
        <h2>{currentGame.name}</h2>
        <img src={currentGame.background_image} alt={currentGame.name}/>
        <a classname="btn btn-primary" href={currentGame.stores[0].url_en}>Website Link</a>
      </Col>
    )
  } else {
    return null
  }
}

export default App;
