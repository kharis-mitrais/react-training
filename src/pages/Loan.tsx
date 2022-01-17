import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LoanTable, { LoanInterface } from '../components/LoanTable';

const LOAN_ENDPOINT = 'https://my-json-server.typicode.com/kharis-mitrais/react-training/loanList';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-contents: center;
  text-align: center;
  align-items: center;
`
const Loan = () => {
  const [loans, setLoans] = useState<LoanInterface[]>([]);

  useEffect(() => {
    axios
      .get(LOAN_ENDPOINT)
      .then((response) => {
        console.log('response: ', response);
        setLoans(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <Wrapper>
        <h1>Your Loan List Information</h1>
        <LoanTable loans={loans} />
      </Wrapper>
    </Layout>
  );
};

export default Loan;
