import React from "react";
import styled from "styled-components";

interface letter {
  id: number;
  writer: string;
  title: string;
  content: string;
  passwordHint: string;
  password: string;
}

interface letterDataProps {
  letterData: letter;
}

const Letter = (letterData: letterDataProps) => {
  return (
    <LetterBackground>
      <Writer>{letterData.letterData.writer}</Writer>
    </LetterBackground>
  );
};

const LetterBackground = styled.article`
  width: 300px;
  height: 300px;
  margin: 5px;

  color: ${({ theme }) => theme.colors.brown};
  background-color: ${({ theme }) => theme.colors.yellow};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Writer = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header};
`;

export default Letter;
