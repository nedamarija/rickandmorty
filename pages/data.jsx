import { useState, useEffect } from 'react';

const Data = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character`);

    const res = await data.json();

    setCharacters(res.results);
  }, []);

  return (
    <div>
      <h1>Hello Rick and Morty</h1>
      {characters.map((character) => {
        return (
          <div>
            <ul>
              <img src={character.image} />
              <li>{character.name}</li>
              <ul>
                <li>{character.status}</li>
                <li>{character.species}</li>
              </ul>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
