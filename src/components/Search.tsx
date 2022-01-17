import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;

  input {
    width: 35%;
    height: 45px;
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: 50px;
    font-size: 20px;
  }
`;

const Search = ({ onChange, onBlur, value }: any) => {
  return (
    <InputStyled>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type='text'
        placeholder='Search...'
      />
    </InputStyled>
  );
};

export default Search;
