import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const BOOKS_ENDPOINT = 'http://localhost:3002/books';

const BookDetail = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`${BOOKS_ENDPOINT}/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2.75rem'}}>
        <img style={{ height: '260px', width: '185px', borderRadius: '20px' }} src={book.imageUrl} alt={`${book.title}-img`} />
        <div style={{ flex: '2', paddingLeft: '1.75rem', paddingRight: '1.75rem' }}>
          <div>
            Title : {book.title}
          </div>
          <div>
            Year : {book.year}
          </div>
          <div>
            Author : {book.author}
          </div>
          <div>
            Stock : {book.stock}
          </div>
          <div>
            Rating : {book.rating}
          </div>
        </div>
        <div style={{ flex: '1', paddingLeft: '1.75rem', paddingRight: '1.75rem' }}>
          <Button onClick={() => console.log('pressed')}>Request Loan</Button>
        </div>
      </div>

      <div>
        <h1>Summary</h1>
        <p>{book.description}</p>
      </div>
    </Layout>
  );
};

export default BookDetail;
