// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchCharacters } from './utils/api';
import CharacterTable from './components/CharacterTable';
import CharacterDetail from './components/CharacterDetail';
import CustomPagination from './components/Pagination';
import Alert from 'react-bootstrap/Alert';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters(currentPage);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error("Error loading characters:", error);
        setError('Failed to load characters. Please try again.');
      }
    };

    loadCharacters();
  }, [currentPage]);

  const handleRowClick = (character) => {
    setSelectedCharacter(character);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">Rick and Morty Characters</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 form-control"
      />
      <CharacterTable characters={filteredCharacters} onRowClick={handleRowClick} />
      <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <CharacterDetail character={selectedCharacter} />
    </div>
  );
};

export default App;
