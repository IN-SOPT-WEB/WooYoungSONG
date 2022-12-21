import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Letter from "../components/letter";

interface letter {
  id: number;
  writer: string;
  title: string;
  content: string;
  passwordHint: string;
  password: string;
}

const MainPage = () => {
  const navigate = useNavigate();
  const [letters, setletters] = useState<letter[]>([]);

  const getLetters = () => {
    fetch("https://test.api.com/letters")
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setletters(data);
        console.log("sdf", data);
      });
  };

  useEffect(() => {
    getLetters();
  }, []);

  const gotoWrite = () => {
    navigate("/write");
  };

  return (
    <>
      <Header>
        <p>31기 IN SOPT 송우영</p>
        <h1>웨비들의 편지함</h1>
        <WriteButton onClick={gotoWrite}>편지쓰기</WriteButton>
      </Header>
      <LetterContainer>
        {letters.map((letterData: letter) => {
          return <Letter key={letterData.id} letterData={letterData} />;
        })}
      </LetterContainer>
    </>
  );
};

export default MainPage;

const Header = styled.section`
  width: 100vw;
  padding: 35px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.header};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;

const WriteButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

const LetterContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
