import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Search from '../components/Search';
import BookList from '../components/BookList';
import { BookInterface } from '../components/Book';

const BOOKS_ENDPOINT = 'https://my-json-server.typicode.com/kharis-mitrais/react-training/books';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    axios
      .get(BOOKS_ENDPOINT)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (userInput: any) => {
    setSearchInput(userInput);

    const filteredItems = books.filter((book: BookInterface) => {
      return Object.values(book.title)
        .join('')
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    setFilteredResult(filteredItems);
  };

  return (
    <Layout>
      <Search
        value={searchInput}
        onChange={(e: any) => handleSearch(e.target.value)}
        onBlur={(e: any) => handleSearch(e.target.value)}
      />
      <BookList books={searchInput.length > 1 ? filteredResult : books} />
    </Layout>
  );
};

export default Home;
