import React from "react";
import styled from "styled-components";
import { HistoryItemProps } from "../api/type";

const HistoryContainer = styled.div`
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.buttonColor};
  position: absolute;
  top: 144px;
  width: 15rem;
  border: 1px solid ${({ theme }) => theme.colors.grayColor};
  background-color: white;
`;

const HeaderContainer = styled.div`
  overflow: hidden;
`;

const RemoveText = styled.span`
  float: right;
  color: ${({ theme }) => theme.colors.pointColor};
  cursor: pointer;
`;

const ListContainer = styled.ul`
  margin: 10px 0;
`;

const KeywordContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const RemoveButton = styled.button`
  float: right;
  color: ${({ theme }) => theme.colors.pointColor};
  border: 1px solid ${({ theme }) => theme.colors.grayColor};
  padding: 3px 5px;
  border-radius: 15px;
  cursor: pointer;
`;

const Keyword = styled.span`
  font: ${({ theme }) => theme.fontSizes.text};
  cursor: pointer;
`;

interface Historyprops {
  history: Array<HistoryItemProps>;
  onRemoveHistory: (id: number) => void;
  onClearHistory: (e: React.MouseEvent<HTMLSpanElement>) => void;
  clickSearchButton: (username: string) => void;
}

function History({
  history,
  onRemoveHistory,
  onClearHistory,
  clickSearchButton,
}: Historyprops) {
  if (history.length === 0) {
    return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>;
  }

  return (
    <HistoryContainer>
      <HeaderContainer>
        <RemoveText onClick={onClearHistory}>전체삭제</RemoveText>
      </HeaderContainer>
      <ListContainer>
        {history.map(({ id, text }) => {
          return (
            <KeywordContainer key={id}>
              <Keyword onClick={() => clickSearchButton(text)}>{text}</Keyword>
              <RemoveButton
                onClick={() => {
                  onRemoveHistory(id);
                }}
              >
                <span className="material-symbols-outlined">delete</span>
              </RemoveButton>
            </KeywordContainer>
          );
        })}
      </ListContainer>
    </HistoryContainer>
  );
}

export default History;
