import React from 'react';
import styled from 'styled-components';
import Book, { BookInterface } from './Book';

const GridView = styled.div`
  margin-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.25rem;
  justify-items: center;
  
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const BookList = ({ books }: {books: BookInterface[]}) => {
  return (
    <GridView>
      {
          books.map((book) => <Book key={book.id} id={book.id} title={book.title} imageUrl={book.imageUrl} />)
      }
    </GridView>
  );
};

export default BookList;
