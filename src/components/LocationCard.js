import React from "react";
import {Card, ToastBody, ToastHeader, Col} from "reactstrap"

export default function LocationCard({ episode }) {
  return (
    <Col xs="3" md="3">
      <Card body>
        <ToastHeader>{episode.name}</ToastHeader>
        <ToastBody>Episode: {episode.episode}}</ToastBody>
        
      </Card>
    </Col>
  );
}
