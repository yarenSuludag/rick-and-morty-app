// src/components/CharacterDetail.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const CharacterDetail = ({ character }) => {
  if (!character) {
    return <p>Select a character to see details.</p>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Status:</strong> {character.status}
        </Card.Text>
        <Card.Text>
          <strong>Species:</strong> {character.species}
        </Card.Text>
        <Card.Text>
          <strong>Gender:</strong> {character.gender}
        </Card.Text>
        <Card.Text>
          <strong>Origin:</strong> {character.origin.name}
        </Card.Text>
        <Card.Text>
          <strong>Location:</strong> {character.location.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CharacterDetail;
