import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const GridView = styled.div`
  margin-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.25rem;
`;

const BookList = ({ books }) => {
  return (
    <GridView>
      {
          books.map((book) => <Book key={book.id} id={book.id} title={book.title} imgUrl={book.imageUrl} />)
      }
    </GridView>
  );
};

export default BookList;
