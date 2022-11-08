import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MainBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.header};
  color: ${({ theme }) => theme.colors.mainColor};
`;

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [modalPokemon, setModalPokemon] = useState([0]);
  const [point, setPoint] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return <MainBackground>main</MainBackground>;
}
