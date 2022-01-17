import React from "react";
import styled from "styled-components";
import { BookInterface } from "./Book";

export interface LoanInterface {
  id: number;
  bookId: number;
  book: BookInterface;
  loanDate: Date;
  returnDate: Date;
}

interface LoanTableProps {
  loans: LoanInterface[];
}

const Table = styled.table`
  border: 1px solid black;
  width: 100%;
`;

const CellHead = styled.th`
  padding: 5px 10px;
`;

const Cell = styled.td`
  padding: 5px 10px;
`;

const LoanTable = ({ loans }: LoanTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <CellHead>No</CellHead>
          <CellHead>Title</CellHead>
          <CellHead>Loan Date</CellHead>
          <CellHead>Return Date</CellHead>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr>
            <Cell>{loan.id}</Cell>
            <Cell>{loan.book?.title || loan.bookId}</Cell>
            <Cell>{loan.loanDate}</Cell>
            <Cell>{loan.returnDate}</Cell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LoanTable;
