import styled from 'styled-components'
import { cores } from '../../styles'

export const ConteudoListaComida = styled.div`
  background-color: ${cores.vermelhoRosado};
  padding: 5px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* ✅ suaviza o efeito */

  /* 🟢 Efeito de zoom quando passa o mouse */
  &:hover {
    transform: scale(1.05); /* aumenta 5% */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); /* adiciona uma sombra */
    cursor: pointer; /* mostra o ponteiro de clique */
  }

  img {
    width: 304px;
    max-height: 167px;
    width: 100%;
    height: 100%;
  }

  > button,
  a {
    width: 100%;
    display: inline-block;
    text-align: center;
    background-color: ${cores.begePessego};
    color: ${cores.vermelhoRosado};
    margin-top: auto;
  }
`

export const Titulo = styled.h1`
  margin-top: 8px;
  color: ${cores.begePessego};
  font-size: 16px;
`

export const Descricao = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  color: ${cores.begePessego};
  font-size: 16px;
`
