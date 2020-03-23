import React from "react";
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function GameListItem(props) {
    return (
        <Col lg={4}>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
            <p>Rating: {props.rating}</p>
            <p>Release date: {props.releaseDate}</p>
            <Button href={"/game/:" + props.id}>Read more</Button>
        </Col>
    )
}