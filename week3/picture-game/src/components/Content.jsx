import React, { useState } from 'react'
import Question from '../Content/Question.jsx';
import Score from '../Content/Score.jsx';
import styled from 'styled-components'
import gameData from '../GameData.js';
import { useEffect } from 'react';

const CurrentNumber = styled.div`
    font-family : 'ImcreSoojin';
    font-size: 20px;
    color:black;
    margin: 0.5rem;
`

const RetryButton = styled.button`
    font-family: 'ImcreSoojin';
    color: white;
    background: #9e9e9e;
    border-radius: 5px;
    width: 6rem;
    height: 2rem;
    font-size: 20px;
    cursor: pointer;
    border: none;

    &:hover{  
        background-color : white;
        color : #9e9e9e;
        border : 2px solid #9e9e9e;
    }
`
export default function Content() {
    const [userScore, setUserScore] = useState(0);
    const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
    const [currentGameDataList, setCurrentGameDataList] = useState([...gameData]);
    const [currentGameData, setCurrentGameData] = useState([...gameData][0]);
    const [isRetry, setIsRetry] = useState()
    const [isEnd, setIsEnd] = useState(false);

    const retryGame = () => {
        window.location.reload()
    }

    useEffect(() => {
        gameData.sort(() => Math.random() - 0.5); // 문제 순서 랜덤으로 섞기
        setCurrentGameDataList(gameData);
        setCurrentGameData([...currentGameDataList][0]);
        setIsRetry(false);
    },[isRetry])


    return (
        <>
            {isEnd ? null : <CurrentNumber>{currentQuizNumber}번째 문제</CurrentNumber> }
            <Score userScore={userScore} />
            <Question userScore={userScore} setUserScore={setUserScore} currentQuizNumber={currentQuizNumber} setCurrentQuizNumber={setCurrentQuizNumber} currentGameDataList={currentGameDataList} setCurrentGameData={setCurrentGameData} currentGameData={currentGameData} isEnd={isEnd} setIsEnd={setIsEnd}/>
            <RetryButton onClick={retryGame}>다시시작</RetryButton>
        </>
    )
}
