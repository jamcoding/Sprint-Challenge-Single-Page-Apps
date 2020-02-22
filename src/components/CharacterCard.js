import React from "react";

export default function CharacterCard({ character }) {
  console.log("character", character);
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
}
