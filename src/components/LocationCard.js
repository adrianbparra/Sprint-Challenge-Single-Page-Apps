import React from "react";
import {Card, CardTitle, CardText,CardBody, Col} from "reactstrap"

export default function LocationCard({ episode }) {
  return (
    <Col xs="3" md="3">
      <Card body>
        <CardBody>
        <CardTitle>{episode.name}</CardTitle>
        </CardBody>
        <CardText>Episode: {episode.episode}}</CardText>
        <CardText>Air Date: {episode.air_date}</CardText>

      </Card>
    </Col>
  );
}
