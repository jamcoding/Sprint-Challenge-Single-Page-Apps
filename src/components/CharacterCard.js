import React from "react";
import styled from 'styled-components';

const Character = styled.div`
width: 30%;
margin: 2% 1%;
border: 2px solid #4B4B4B;
border-radius: 2px;
` 

const CharacterImage = styled.img`
width: 100%;
border-bottom: thin solid #4B4B4B;
`

const CharacterText = styled.p`
padding: 0 10px;
`

export default function CharacterCard({ character }) {
  // console.log("character", character);
  return (
    <Character>
      <CharacterImage src={character.image} />
      <CharacterText>Name: {character.name}</CharacterText>
      <CharacterText>Status: {character.status}</CharacterText>
      <CharacterText>Species: {character.species}</CharacterText>
    </Character>
  );
}
