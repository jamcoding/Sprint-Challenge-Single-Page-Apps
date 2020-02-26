import React, { useState, useEffect } from "react";

export default function SearchForm({characters}) {
    // console.log("props", character)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = React.useState(characters);

    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      useEffect(() => {
          const results = characters.filter(characterObject => 
            characterObject.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <section className="search-form">
            <form>
                <label htmlFor="name">Search:</label>
                <input
                    placeholder="Search character"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>

            <div>
                {searchResults.map(item => (
                    <p>{item.name}</p>
                ))}
            </div>
        </section>
    )
}