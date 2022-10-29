import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import gameData from '../GameData.js';

const QuizPicture = styled.img`
    width: 15rem;
    height: 20rem;
`
const Answers = styled.div`
    display: flex;
`
const Answer = styled.button`
    color: white;
    background: purple;
    border-radius: 5px;
    width: 6rem;
    height: 2rem;
    font-size: 18px;
`

export default function Question() {
    const [currentGameData, setCurrentGameData] = useState([...gameData][0]);
    const chooseAnswer = () => {}
    useEffect(() => {
        setCurrentGameData([...gameData][0])
    })

    return (
        <>
            <QuizPicture src={currentGameData.imageSrc} alt="퀴즈 사진"/>
            <Answers>
                {currentGameData.answers.map((answer, index) => (
                    <Answer key={index} onClick={chooseAnswer}>{answer}</Answer>
                ))}
            </Answers>
        </>
    )
}