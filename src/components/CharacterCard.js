import React from "react";

export default function CharacterCard({ character }) {
  console.log("character", character);
  return (
    <div>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}
