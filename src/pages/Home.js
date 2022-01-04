import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Search from '../components/Search';
import BookList from '../components/BookList';

const BOOKS_ENDPOINT = 'http://localhost:3002/books';

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

  const handleSearch = (userInput) => {
    setSearchInput(userInput);

    const filteredItems = books.filter((book) => {
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
        onChange={(e) => handleSearch(e.target.value)}
        onBlur={(e) => handleSearch(e.target.value)}
      />
      <BookList books={searchInput.length > 1 ? filteredResult : books} />
    </Layout>
  );
};

export default Home;
