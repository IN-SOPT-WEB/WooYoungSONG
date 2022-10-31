import React from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
    font-family: 'ImcreSoojin';
    width: 30rem;
    height: 10rem;
    position: absolute;
    background: ${(props) => props.isCorrect ? "#228f43" : "#ff3d3d"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`
const Result = styled.div`
    font-family: 'ImcreSoojin';
    color: white;
    font-size: 30px;
    margin: 0.2rem;
`
const Group = styled.div`
    font-family: 'ImcreSoojin';
    color: white;
    font-size: 20px;
    margin: 0.2rem;
`
const CloseButton = styled.button`
    font-family: 'ImcreSoojin';
    color: ${(props) => props.isCorrect ? "#228f43" : "#ff3d3d"};
    background: white;
    border-radius: 5px;
    border :none;
    cursor: pointer;
    padding: 0.2rem 0.4rem;
    font-size: 16px;
    margin-top: 0.5rem;
`
export default function Modal({isCorrect, currentGameData, setIsModalOpen, currentQuizNumber, setCurrentQuizNumber}) {
    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentQuizNumber(currentQuizNumber+1);
    }

    return(
        <ModalBackground isCorrect={isCorrect}>
                <Result>{isCorrect ? "정답입니다!" : "오답입니다!"}</Result>
                <Group>{isCorrect ? `${currentGameData.group} ${currentGameData.correctAnswer}` : `저는 ${currentGameData.group} 입니다~`}</Group>
                <CloseButton onClick={closeModal} isCorrect={isCorrect}>닫기</CloseButton>
        </ModalBackground >
    )
}