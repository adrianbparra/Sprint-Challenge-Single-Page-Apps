import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import "../index.css";

export default function CharacterCard({character}) {
  return (
    <Col xs="3" md="3">
      <Card>
        <CardImg src={character.image} alt={character.name}/>
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardSubtitle>Gender: {character.gender}</CardSubtitle>
          <CardSubtitle>Species: {character.species}</CardSubtitle>
          <CardSubtitle>Status: {character.status}</CardSubtitle>
          <CardText>Type: {character.type}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
