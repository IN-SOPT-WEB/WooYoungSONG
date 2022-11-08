import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: ${({ theme }) => theme.fontSizes.header};
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.subColor};
`;

const SearchButton = styled.button`
  color: ${({ theme }) => theme.colors.subColor};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  border: none;
  width: 10rem;
  height: 5rem;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  cursor: pointer;
`;

export default function Main() {
  const navigate = useNavigate();

  const gotoSearch = () => {
    navigate("/search");
  };
  return (
    <>
      <MainBackground>
        GitHub Profile
        <SearchButton onClick={gotoSearch}>검색하기</SearchButton>
      </MainBackground>
    </>
  );
}
