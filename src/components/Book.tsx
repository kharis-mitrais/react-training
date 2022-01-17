import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  position: relative;
  height: 359px;
  width: 241px;
  background: url(${(props: {imageUrl: string}) => props.imageUrl});
  background-size: 100% 100%;
  border-radius: 25px;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: 30px;
  background-color: #0098f1;
  display: flex;
  justify-content: center;
  text-align:center;
`;

const Title = styled.span`
  align-self: center;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.1rem;
`;

export interface BookInterface {
  id: string,
  imageUrl: string,
  title: string
  author: string,
  year: number,
  stock: number,
  rating: number,
  description: string,
  isLoan: boolean
}

const Book = ({ id, imageUrl, title }: BookInterface) => {
  return (
    <Link to={`/bookDetail/${id}`}>
      <Wrapper imageUrl={imageUrl}>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Wrapper>
    </Link>
  );
};

export default Book;
