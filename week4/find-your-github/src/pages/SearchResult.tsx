import React from "react";
import styled from "styled-components";
// import { gitIcon } from "../assets/images/github-logo.png";

const SearchResultBackground = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 6px;
  margin-top: 3rem;
`;

const CloseButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.buttonColor};
  background: none;
  border: none;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.subColor};
  width: 90%;
  height: 10rem;
  padding-left: 1rem;
  border-radius: 6px;
`;

const UserLogin = styled.div`
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  margin-left: 1rem;
`;

const UserImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const UserDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-top: 1rem;
`;

const GitHUbrUrl = styled.a`
  text-decoration: none;
`;

const UserDetailBox = styled.div`
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

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  color: ${({ theme }) => theme.colors.pointColor};
`;

interface SearchResultProps {
  userProfile: any;
  closeResult: () => void;
}
export default function SearchResult({
  userProfile,
  closeResult,
}: SearchResultProps) {
  return (
    <SearchResultBackground>
      <CloseButton onClick={closeResult}>X</CloseButton>
      <UserInfo>
        <UserImage alt="사용자 이미지" src={userProfile.avatar_url} />
        <UserLogin>{userProfile.name}</UserLogin>
        <GitHUbrUrl href={userProfile.gitHubUrl}>
          <span className="material-symbols-outlined">link</span>
        </GitHUbrUrl>
      </UserInfo>
      <UserDetail>
        <UserDetailBox>
          <SubTitle>following</SubTitle> {userProfile.following}
        </UserDetailBox>
        <UserDetailBox>
          <SubTitle>followers</SubTitle>
          {userProfile.followers}
        </UserDetailBox>
        <UserDetailBox>
          <SubTitle>public_repos</SubTitle>
          {userProfile.public_repos}
        </UserDetailBox>
      </UserDetail>
    </SearchResultBackground>
  );
}
