import React, {useState} from 'react';
import PropTypes, {arrayOf, string, shape} from 'prop-types';
import './App.css';
import pokemons from './pokemon.json';

const PokemonRow = ({pokemon}) => {
  return (
    <tr>
      <td>{pokemon?.name?.english}</td>
      <td>{pokemon?.type.join(', ')}</td>
    </tr>
  );
};

PokemonRow.propTypes = {
  pokemon: shape({
    name: shape({
      english: string,
    }),
    type: arrayOf(PropTypes.string),
  }),
};

const App = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1rem',
    }}>
      <h1 className="title">Pokemon search</h1>
      <input type='text' value={search} onChange={handleChange}/>
      <table width="100%">
        <thead>
          <tr>
            <th>Header</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons
                .filter((pokemon) => (
                  pokemon.name.english.toLowerCase()
                      .includes(search.toLowerCase())),
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    key={pokemon.id}
                    pokemon={pokemon}
                  />
                ),
                )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
