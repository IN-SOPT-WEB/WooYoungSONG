import React, { useEffect } from 'react'
import Question from '../Content/Question.jsx';
import Score from '../Content/Score.jsx';
import gameData from '../GameData.js';
import styled from 'styled-components'

const Retry = styled.button`
    color: white;
    background: red;
    border-radius: 5px;
    width: 6rem;
    height: 2rem;
    font-size: 18px;
`
export default function Content() {
    const quizDataNumber = []; // 퀴즈에 사용되는 Data들
    const quizGameDataList = []; // 퀴즈에서 보여지는 Data들 순서
    const createGameDataList = () => {
        for(let i = 0; i < gameData.length; i++) {  // 게임 데이터 갯수 만큼의 숫자 배열 생성
            quizDataNumber.push(i);
        }

        for(let n = 0; n < gameData.length; n++) { // 게임 데이터들의 정렬을 랜덤으로
            const index = Math.floor(Math.random() * quizDataNumber.length);
            quizGameDataList.push(quizDataNumber[index]);
            quizDataNumber.splice(index, 1);
        }
    }

    useEffect(() => {
        createGameDataList()
    })

    return (
        <>
            <Score />
            <Question quizGameDataList={quizGameDataList}/>
            <Retry>다시시작</Retry>
        </>
    )
}
