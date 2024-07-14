// src/components/CharacterTable.js
import React from 'react';
import Table from 'react-bootstrap/Table';

const CharacterTable = ({ characters, onRowClick }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.id} onClick={() => onRowClick(character)}>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.species}</td>
            <td>{character.gender}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CharacterTable;
