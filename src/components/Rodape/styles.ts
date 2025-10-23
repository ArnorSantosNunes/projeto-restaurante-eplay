import styled from 'styled-components'
import { cores } from '../../styles'

export const RodapeContainer = styled.div`
  background-color: ${cores.begePessego};
  text-align: center;
  margin-top: 120px;
`

export const ListaRodape = styled.div`
  padding-top: 40px;

  > img {
    width: 125px;
    display: block;
    margin: 0 auto;

    transition: transform 0.3s ease, box-shadow 0.3s ease; /* ✅ suaviza o efeito */

    /* 🟢 Efeito de zoom quando passa o mouse */
    &:hover {
      transform: scale(1.05); /* aumenta 5% */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); /* adiciona uma sombra */
      cursor: pointer; /* mostra o ponteiro de clique */
    }
  }
`
export const RedeSociais = styled.div`
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  gap: 8px;
  > img {
    width: 24px;

    transition: transform 0.3s ease, box-shadow 0.3s ease; /* ✅ suaviza o efeito */

    /* 🟢 Efeito de zoom quando passa o mouse */
    &:hover {
      transform: scale(1.05); /* aumenta 5% */
      cursor: pointer; /* mostra o ponteiro de clique */
    }
  }
`
export const Descricao = styled.p`
  color: ${cores.vermelhoRosado};
  font-size: 14px;
  padding-bottom: 40px;
`
