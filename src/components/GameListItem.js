import React from "react";
import Col from 'react-bootstrap/Col'

export default function GameListItem(props) {
    return (
        <Col lg={4}>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
        </Col>
    )
}