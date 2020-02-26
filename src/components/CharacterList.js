import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const Container = styled.div`
width: 60%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 30px auto;
`

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                setCharacters(response.data.results)
            })
            .catch(error => {
                console.log("error", error);
            })
    }, [])

    return (
        <section className="section-list">
            <SearchForm characters={characters} />
            <Container>
                {characters.map(char => {
                        return <CharacterCard key={char.id} character={char} />
                    }
                )}
            </Container>
        </section>
    )
}