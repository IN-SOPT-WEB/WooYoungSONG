import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getGitHubProfile } from "../api/searchApi";
import SearchResult from "./SearchResult";
import History from "./Histroy";

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

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  height: 60px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor};
  border-radius: 6px;
  width: 15rem;
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
  height: 60px;
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
  login: string;
  name: string;
  avatar_url: string;
  gitHubUrl: string;
  following: number;
  followers: number;
  public_repos: number;
}

export default function Search() {
  const historyref = useRef<HTMLDivElement>(null);
  const [userProfile, setUserProfile] = useState<userProfileProps>();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [isExist, setIsExist] = useState<boolean>(false);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history") || "[]")
  );
  const [isHistoryShow, setIsHistoryShow] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
    setIsHistoryShow(true);
  };

  const closeResult = () => {
    setIsExist(false);
  };

  //검색어 추가
  const handleAddHistory = () => {
    const newText = {
      id: Date.now(),
      text: userName,
    };
    setHistory([newText, ...history]);
  };

  //검색어 삭제
  const handleRemoveHistory = (id: number) => {
    const nextText = history.filter((text: { id: number }) => {
      return text.id != id;
    });
    setHistory(nextText);
  };

  //검색어 전체 삭제
  const handleClearHistory = () => {
    setHistory([]);
  };

  const sendApi = async () => {
    const data = await getGitHubProfile(userName);
    if (data === "noUser") {
      setIsExist(false);
    } else {
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
      navigate(`/search/${userName}`);
      setIsExist(true);
    }
  };

  const resetSearch = () => {
    setIsHistoryShow(false);
    setUserName("");
  };

  const clickSearchButton = () => {
    resetSearch();
    sendApi();
    handleAddHistory();
  };

  const clickHistory = async (history: string) => {
    const data = await getGitHubProfile(history);
    if (data === "noUser") {
      setIsExist(false);
    } else {
      setUserProfile(data);
      setUserProfile({
        ...data,
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        gitHubUrl: data.html_url,
        following: data.following,
        followers: data.followers,
        public_repos: data.public_repos,
      });
      navigate(`/search/${history}`);
      setIsExist(true);
    }
    resetSearch();
  };

  // 화면이 paint되기 전에 컴포넌트가 유저에게 보이자마자 포커스 되도록
  useLayoutEffect(() => {
    if (historyref.current !== null) {
      historyref.current.focus();
    }
  }, []);

  //input 밖을 누르면 history 컴포넌트가 닫히도록
  const clickInputOutside = (event: any) => {
    const current = historyref.current;
    if (!current?.contains(event.target)) {
      setIsHistoryShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickInputOutside);
    return () => {
      document.removeEventListener("mousedown", clickInputOutside);
    };
  });

  return (
    <SearchBackgroud>
      <SearchTitle>찾고싶은 github userName을 검색창에 입력하세요!</SearchTitle>
      <SearchInputContainer>
        <HistoryWrapper ref={historyref}>
          <SearchInput
            placeholder="userName을 입력하세요"
            value={userName}
            onChange={onUserNameChange}
          />
          {isHistoryShow && (
            <History
              history={history}
              onRemoveHistory={handleRemoveHistory}
              onClearHistory={handleClearHistory}
              clickHistory={clickHistory}
            />
          )}
        </HistoryWrapper>
        <InputButton onClick={clickSearchButton}>검색</InputButton>
      </SearchInputContainer>
      {isExist ? (
        <SearchResult userProfile={userProfile} closeResult={closeResult} />
      ) : (
        <NoUserBox>검색결과가 없습니다.</NoUserBox>
      )}
    </SearchBackgroud>
  );
}
