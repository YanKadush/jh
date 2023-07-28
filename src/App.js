import React from 'react';
import './App.css';
import pokemon from './pokemon.json';

const App = () => {
  return (
    <div style={{
      margin: 'auto',
      width: 800,
      paddingTop: '1rem',
    }}>
      <h1 className="title">Pokemon search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Header</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map( (item) => (
              <tr key={item.id}>
                <td>{item.name.english}</td>
                <td>{item.type.join(', ')}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
