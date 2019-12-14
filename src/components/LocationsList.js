import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row} from 'reactstrap';
import LocationCard from "./LocationCard";

export default function LocationsList() {

    const [episodes,setEpisodes] = useState([])
useEffect(()=>{
    axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(res=>{
            console.log(res)
            setEpisodes(res.data.results)
        })
        .catch(error => console.log("No episodes found", error)) 
},[])

return (
    <Container>
        <Row>
            {episodes.map(episode => {
                return <LocationCard key={episode.id} episode={episode}/>
            })}
        </Row>

    </Container>
)

}
