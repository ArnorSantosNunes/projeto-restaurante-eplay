import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`
export const HeaderLogo = styled.div`
  padding-top: 40px;
  img {
    width: 125px;
    display: block;
    margin: 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* ✅ suaviza o efeito */

    &:hover {
      transform: scale(1.05); /* aumenta 5% */
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); /* adiciona uma sombra */
      cursor: pointer; /* mostra o ponteiro de clique */
    }
  }
  h1 {
    color: ${cores.vermelhoRosado};
    font-size: 36px;
    padding-top: 180px;
    text-align: center;
    line-height: bold;
  }
`
