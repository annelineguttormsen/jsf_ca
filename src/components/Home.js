import React, { useState, useEffect } from "react";
import GameListItem from "./GameListItem.js";

import Container from 'react-bootstrap/Container';

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
            {
                state.games
                .map(index => <GameListItem key={index.id} 
                    title={index.name} 
                    img={index.background_image}/>)
            }
        </Container>
    )
}