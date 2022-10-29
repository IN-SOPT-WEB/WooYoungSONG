import React from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
    width: 30rem;
    height: 10rem;
    position: absolute;
    background: ${(props) => props.isCorrect ? "green" : "red"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Result = styled.div`
    font-size: 20px;
`
const CloseButton = styled.button`
    background:white;
    cursor: pointer;
`
export default function Modal({isCorrect, setIsModalOpen, currentQuizNumber, setCurrentQuizNumber}) {
    const closeModal = () => {
        setIsModalOpen(false)
        if(isCorrect){
            setCurrentQuizNumber(currentQuizNumber+1);
        }
    }

    return(
        <ModalBackground isCorrect={isCorrect}>
            <Result>{isCorrect ? "정답입니다!" : "오답입니다!"}</Result>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
        </ModalBackground>
    )
}