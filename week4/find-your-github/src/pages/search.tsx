import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getGitHubProfile } from "../api/searchApi";
import SearchResult from "./SearchResult";

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

const NoUserBox = styled.div`
  background-color: ${({ theme }) => theme.colors.subColor};
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: ${({ theme }) => theme.fontSizes.text};
  width: 13rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
`;

export interface userProfileProps {
  name: string;
  avatar_url: string;
  gitHubUrl: string;
  following: number;
  followers: number;
  public_repos: number;
}

export default function Search() {
  const [userProfile, setUserProfile] = useState<userProfileProps>();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [isExist, setIsExist] = useState<boolean>(false);

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
  };

  const clickSearchButton = async () => {
    const data = await getGitHubProfile(userName);
    if (data === "noUser") {
      setIsExist(false);
    } else {
      console.log(data);
      setUserProfile(data);
      setUserProfile({
        ...data,
        name: data.login,
        avatar_url: data.avatar_url,
        gitHubUrl: data.html_url,
        following: data.following,
        followers: data.followers,
        public_repos: data.public_repos,
      });
      setUserName("");
      navigate(`/search/${userName}`);
      setIsExist(true);
    }
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
      {isExist ? (
        <SearchResult {...userProfile} />
      ) : (
        <NoUserBox>유저가 없습니다.</NoUserBox>
      )}
    </SearchBackgroud>
  );
}
