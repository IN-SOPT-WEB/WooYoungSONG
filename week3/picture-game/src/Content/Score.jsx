import React from 'react';
import styled from 'styled-components'

const CurrentScore = styled.div`
    font-family : 'ImcreSoojin';
    color : black;
    margin: 0.5rem;
    font-size: 20px;
`
export default function Score({userScore}) {
    return(
        <CurrentScore>{userScore}점</CurrentScore>
    )
}