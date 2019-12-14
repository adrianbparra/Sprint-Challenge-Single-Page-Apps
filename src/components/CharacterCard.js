import React from "react";

export default function CharacterCard({character}) {
  return (
    <div key={character.id}>
      <img src={character.image} alt={character.name}/>
      <h2>{character.name}</h2>
    </div>
  );
}
