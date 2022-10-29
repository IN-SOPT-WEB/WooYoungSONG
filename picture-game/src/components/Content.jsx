import React from 'react'
import Question from '../Content/Question.jsx';
import Score from '../Content/Score.jsx';
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
    return (
        <>
            <Score />
            <Question />
            <Retry>다시시작</Retry>
        </>
    )
}
