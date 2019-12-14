import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row} from 'reactstrap';
import "../index.css";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  const [searchResults , setSearchResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
        setSearchResults(response.data.results);
      })
      .catch(error => console.log("Sorry no Characters", error));

  }, []);

  useEffect(()=> {
    console.log(searchTerm)

    const results = characters.filter(character => {
      // console.log(character.name.toLowerCase().includes)
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    setSearchResults(results)

  },[searchTerm])

  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <Container className="character-list">
        
        <Row>

          
            {searchResults.map(character => {
              
              return <CharacterCard key={character.id} character={character} />
            })}
        </Row>
      </Container>
    </div>
  );
}
