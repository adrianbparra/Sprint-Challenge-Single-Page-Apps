import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row, Col } from 'reactstrap';
import "../index.css";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => console.log("Sorry no Characters", error));

  }, []);

  return (
    <Container className="character-list">
      <Row>
          {characters.map(character => {
            
            return <CharacterCard key={character.id} character={character} />
          })}
      </Row>
    </Container>
  );
}
