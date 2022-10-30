import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import gameData from '../GameData.js';
import Modal from './Modal.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CurrentNumber = styled.div`
    font-size: 18px;
    color:white;
`
const Hint = styled.button`
    font-size: 12px;
    background: pink;
    color:white;
    cursor: pointer;
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
const ResultMessage = styled.div`
    color: white;
    font-size: 18px;
`
export default function Question({quizGameDataList, userScore, setUserScore}) {
    const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
    const [currentGameData, setCurrentGameData] = useState([...gameData][0]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [resultMessage, setResultMessage] = useState("");

    const chooseAnswer = (e) => {
        setIsModalOpen(true)
        
        if(e.target.innerText === currentGameData.correctAnswer){
            setIsCorrect(true)
            setUserScore(userScore+1)
        }else{
            setIsCorrect(false)
        }
    }

    const showHint = () => {toast(`🔊 ${currentGameData.hint}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    };

    const settingResultMessage = (score) => { // 점수에 따른 메시지 출력
        switch(score){
            case 5 :
                setResultMessage("케이팝 박사이시네요~")
                break;
            case 4 :
                setResultMessage("케이팝 석사로 임명합니다!")
                break;
            case 3 :
                setResultMessage("케이팝 학사이신가요?")
                break;
            case 2 :
                setResultMessage("케이팝을 좋아하시는군요!")
                break;
            case 1 :
                setResultMessage("이번기회에 케이팝에 빠져보시는건 어떨까요?")
                break;
            case 0:
                setResultMessage("케이팝에 관심을 가져주세요😥")
                break;
        }
    }

    useEffect(() => {

        if(currentQuizNumber > gameData.length){
            setIsEnd(true)
            settingResultMessage(userScore);
        }else{
            setCurrentGameData([...gameData][quizGameDataList[currentQuizNumber-1]])
        }
    },[currentQuizNumber])

    return (
        <>  
        {!isEnd ? (
            <>
                <CurrentNumber>{currentQuizNumber}번째 문제</CurrentNumber>
                <Hint onClick={showHint}>힌트보기</Hint>
                <ToastContainer />
                <QuizPicture src={currentGameData.imageSrc} alt="퀴즈 사진"/>
                <Answers>
                    {currentGameData.answers.map((answer, index) => (
                        <Answer key={index} onClick={chooseAnswer}>{answer}</Answer>
                    ))}
                </Answers>
                {isModalOpen && <Modal isCorrect={isCorrect} setIsModalOpen={setIsModalOpen} currentQuizNumber={currentQuizNumber} setCurrentQuizNumber={setCurrentQuizNumber}/>}
            </>
        ) : ( // isEnd 일때
            <>
                <ResultMessage>{resultMessage}</ResultMessage>
            </>
        )
            }
        </>
    )
}