import React, { useState } from 'react'
import Question from '../Content/Question.jsx';
import Score from '../Content/Score.jsx';
import styled from 'styled-components'

const Retry = styled.button`
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
    const retry = () => {
        window.location.reload();
    }

    return (
        <>
            <Score userScore={userScore} />
            <Question userScore={userScore} setUserScore={setUserScore}/>
            <Retry onClick={retry}>다시시작</Retry>
        </>
    )
}
