import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  position: relative;
  height: 359px;
  width: 241px;
  background: url(${(props) => props.imgUrl});
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
`;

const Title = styled.span`
  align-self: center;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.1rem;
`;

const Book = ({ id, imgUrl, title }) => {
  return (
    <Link to={`/bookDetail/${id}`}>
      <Wrapper imgUrl={imgUrl}>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Wrapper>
    </Link>
  );
};

export default Book;
