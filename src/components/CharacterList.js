import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        // console.log('response', response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      })

  }, []);

  return (
    <section className="character-list">
      <Container>
        {characters.map(character => {
            return <CharacterCard character={character} key={character.id} />
          })
        }
      </Container>
    </section>
  );
}
