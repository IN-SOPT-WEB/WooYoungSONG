import React from 'react';
import styled from 'styled-components'

const CurrentScore = styled.div`
    color : white;
`
export default function Score({userScore}) {
    return(
        <CurrentScore>{userScore}점</CurrentScore>
    )
}