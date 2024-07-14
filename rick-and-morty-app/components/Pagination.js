// src/components/Pagination.js
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination>{items}</Pagination>
  );
};

export default CustomPagination;
