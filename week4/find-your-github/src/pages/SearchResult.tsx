import React from "react";
import styled from "styled-components";
import gitIcon from "../assets/images/github-logo.png";
import { UserProfileProps } from "../api/type";

const SearchResultBackground = styled.div`
  width: 55%;
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
  border-radius: 6px;
  justify-content: space-evenly;
`;

const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  color: ${({ theme }) => theme.colors.pointColor};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

const UserLogin = styled.div`
  color: ${({ theme }) => theme.colors.buttonColor};
  font-size: ${({ theme }) => theme.fontSizes.text};
  margin: 1rem 0;
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

const GitHubImage = styled.img`
  width: 1rem;
  height: 1rem;
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
  userProfile: UserProfileProps;
  closeResult: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function SearchResult({
  userProfile,
  closeResult,
}: SearchResultProps) {
  const {
    login,
    name,
    avatar_url,
    gitHubUrl,
    following,
    followers,
    public_repos,
  } = userProfile;

  return (
    <SearchResultBackground>
      <CloseButton onClick={closeResult}>X</CloseButton>
      <UserInfo>
        <UserImage alt="사용자 이미지" src={avatar_url} />
        <UserNameWrapper>
          <UserName>{name}</UserName>
          <UserLogin>{login}</UserLogin>
          <GitHUbrUrl href={gitHubUrl}>
            <GitHubImage alt="github 이미지" src={gitIcon}></GitHubImage>
          </GitHUbrUrl>
        </UserNameWrapper>
      </UserInfo>
      <UserDetail>
        <UserDetailBox>
          <SubTitle>following</SubTitle> {following}
        </UserDetailBox>
        <UserDetailBox>
          <SubTitle>followers</SubTitle>
          {followers}
        </UserDetailBox>
        <UserDetailBox>
          <SubTitle>public_repos</SubTitle>
          {public_repos}
        </UserDetailBox>
      </UserDetail>
    </SearchResultBackground>
  );
}
