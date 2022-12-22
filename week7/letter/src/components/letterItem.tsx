import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Letter, LetterDataProps } from "../common/type";
import { useInterval } from "../utils/useInterval";

const LetterItem = (letterData: LetterDataProps) => {
  const letter: Letter = letterData.letterData;
  const [isOpened, setIsOpened] = useState(false);
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);

  const PasswordSwal = withReactContent(Swal);

  const openModal = () => {
    PasswordSwal.fire({
      title: "비밀번호가 일치해야 편지를 볼 수 있어요!",
      input: "text",
      showCancelButton: true,
      inputPlaceholder: "비밀번호를 입력하세요.",
      inputLabel: letter.passwordHint,
      confirmButtonText: "편지 열기",
      denyButtonText: `닫기`,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === letter.password) {
            setIsOpened(true);
            Swal.close();
          } else {
            resolve("비밀번호를 다시 입력하세요!");
          }
        });
      },
    });
  };

  const closeModal = () => {
    setIsOpened(false);
    setContent("");
    setCount(0);
  };

  useInterval(() => {
    if (isOpened) {
      if (count >= letter.content.length) {
        return;
      }

      setContent((prev) => {
        let result = prev ? prev + letter.content[count] : letter.content[0];
        setCount(count + 1);

        return result;
      });
    }
  }, 300);

  return (
    <>
      <LetterBackground onClick={openModal}>
        <Writer>{letter.writer}</Writer>
      </LetterBackground>
      {isOpened && (
        <LetterModalBackground>
          <LetterModal>
            <LetterInfo>
              <h1>{letter.title}</h1>
              <button onClick={closeModal}>x</button>
            </LetterInfo>
            <h2>편지 쓴 사람 : {letter.writer}</h2>
            <p>{content}</p>
          </LetterModal>
        </LetterModalBackground>
      )}
    </>
  );
};

const LetterBackground = styled.article`
  width: 300px;
  height: 300px;
  margin: 5px;

  color: ${({ theme }) => theme.colors.brown};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 10px dashed ${({ theme }) => theme.colors.green};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Writer = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header};
`;

const LetterModalBackground = styled.article`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  background: repeating-linear-gradient(
    45deg,
    #b1b1b1,
    #b1b1b1 10px,
    #e6e6e6 0,
    #e6e6e6 20px
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LetterModal = styled.section`
  width: 800px;
  height: 400px;
  padding: 20px;

  font-size: ${({ theme }) => theme.fontSizes.text};

  background-color: ${({ theme }) => theme.colors.yellow};

  display: flex;
  flex-direction: column;

  border: 10px dashed ${({ theme }) => theme.colors.red};
  & > h2 {
    font-size: ${({ theme }) => theme.fontSizes.subTitle};

    padding-bottom: 10px;
  }
`;

const LetterInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.brown};

  & > button {
    font-size: ${({ theme }) => theme.fontSizes.title};
    border: none;
    background-color: ${({ theme }) => theme.colors.yellow};

    cursor: pointer;
  }

  & > h1 {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;

export default LetterItem;
