import React from "react";
import Col from 'react-bootstrap/Col'

import { Link } from "react-router-dom";

export default function GameListItem(props) {
    return (
        <Col lg={4}>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
            <p>Rating: {props.rating}</p>
            <p>Release date: {props.releaseDate}</p>
            <Link className="btn btn-primary" to={"/game/" + props.id}>Read More about {props.title}</Link>
        </Col>
    )
}