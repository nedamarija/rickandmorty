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
      <h1>Hello Rick and Neda</h1>
      {characters.map((character) => {
        return (
          <div>
            <ul>
              <img src={character.image} />
              <li>Name: {character.name}</li>
              <ul>
                <li>
                  <span style={{ fontWeight: 'bold' }}>Status:</span>{' '}
                  {character.status}
                </li>
                <li>
                  <span style={{ fontWeight: 'bold' }}>Species:</span>{' '}
                  {character.species}
                </li>
              </ul>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
