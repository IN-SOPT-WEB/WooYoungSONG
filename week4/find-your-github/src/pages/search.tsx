import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getGitHubProfile } from "../api/searchApi";

const SearchBackgroud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.subColor};
`;

const SearchTitle = styled.div`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
`;

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  height: 60px;
  border: 1px solid #969bab;
  border-radius: 6px;
  width: 90%;
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: 14px;
  padding-left: 7px;
  resize: none;
  margin-right: 1rem;
`;

const InputButton = styled.button`
  color: ${({ theme }) => theme.colors.subColor};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  width: 4rem;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.text};
  cursor: pointer;
`;

export default function Search() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
  };

  const clickSearchButton = async () => {
    if (!userName) return;
    const data = await getGitHubProfile(userName);
    console.log(data);
    setUserName("");
    navigate(`/search/${userName}`);
  };

  return (
    <SearchBackgroud>
      <SearchTitle>찾고싶은 github userName을 검색창에 입력하세요!</SearchTitle>
      <SearchInputContainer>
        <SearchInput
          placeholder="userName을 입력하세요"
          value={userName}
          onChange={onUserNameChange}
        />
        <InputButton onClick={clickSearchButton}>검색</InputButton>
      </SearchInputContainer>
    </SearchBackgroud>
  );
}
