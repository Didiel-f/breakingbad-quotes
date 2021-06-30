import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Frase } from './components/Frase';


const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {

  const [frase, setFrase] = useState({});

  const consultarAPI = async() => {
    const api = await fetch('https://www.breakingbadapi.com/api/quote/random')
    const frase = await api.json();
    setFrase(frase[0]);
  };

  useEffect(() => {
    consultarAPI()
  }, [])
  
  return (
    <Contenedor>
      <Frase 
        frase={ frase }
      />
      <Boton
        onClick={consultarAPI}
      >Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
