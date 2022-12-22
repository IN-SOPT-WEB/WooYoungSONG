import React from "react";
import styled from "styled-components";

const WritePage = () => {
  return (
    <Info>
      <h1>
        서버가 종료되어 더이상 <br /> 편지를 보낼 수 없어요😥
      </h1>
    </Info>
  );
};

export default WritePage;

const Info = styled.section`
  height: 100vh;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.header};

  display: flex;
  justify-content: center;
  align-items: center;
`;
