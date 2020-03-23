import React, { useState, useEffect } from "react";
import GameListItem from "./GameListItem.js";

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function Home () {
    const [state, setState] = useState({
        games: []
    });

    useEffect(
        function() {
            fetch("https://api.rawg.io/api/games")
            .then(response => response.json())
            .then(response => response = response.results)
            .then(function(games){ 
                setState({games: games});
            })
        }, []
    );
    
    console.log("dette er state games", state.games);

    return (
        <Container>
            <InputGroup className="search">
                <FormControl
                    placeholder="Search"
                    // onChange={event => handleSearch(event)}
                />
            </InputGroup>
            <Row>
                {
                    state.games
                    .map(index => <GameListItem 
                        title={index.name} 
                        img={index.background_image}
                        rating={index.rating}
                        releaseDate={index.released}
                        id={index.id}
                        key={index.id}
                        />)
                }
            </Row>
        </Container>
    )
}