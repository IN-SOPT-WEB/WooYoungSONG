import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import gameData from '../GameData.js';
import Modal from './Modal.jsx';

const CurrentNumber = styled.div`
    font-size: 18px;
    color:white;
`
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
    cursor: pointer;
`

export default function Question({quizGameDataList}) {
    const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
    const [currentGameData, setCurrentGameData] = useState([...gameData][0]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const chooseAnswer = (e) => {
        setIsModalOpen(true)
        
        if(e.target.innerText === currentGameData.correctAnswer){
            setIsCorrect(true)
        }else{
            setIsCorrect(false)
        }
    }

    useEffect(() => {
        if(currentQuizNumber === 6){
            alert("게임 종료")
        }else{
            setCurrentGameData([...gameData][quizGameDataList[currentQuizNumber-1]])
        }
    },[currentQuizNumber])

    return (
        <>  
            <CurrentNumber>{currentQuizNumber}번째 문제</CurrentNumber>
            <QuizPicture src={currentGameData.imageSrc} alt="퀴즈 사진"/>
            <Answers>
                {currentGameData.answers.map((answer, index) => (
                    <Answer key={index} onClick={chooseAnswer}>{answer}</Answer>
                ))}
            </Answers>
            {isModalOpen && <Modal isCorrect={isCorrect} setIsModalOpen={setIsModalOpen} currentQuizNumber={currentQuizNumber} setCurrentQuizNumber={setCurrentQuizNumber}/>}
        </>
    )
}