import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  margin-top: 80px;
  background-color: ${cores.branca};
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* ✅ suaviza o efeito */

  /* 🟢 Efeito de zoom quando passa o mouse */
  &:hover {
    transform: scale(1.05); /* aumenta 5% */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25); /* adiciona uma sombra */
    cursor: pointer; /* mostra o ponteiro de clique */
  }

  img {
    max-width: 472px;
    max-height: 217px;
    width: 100%;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardContainer = styled.div`
  padding: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${cores.vermelhoRosado};
`
export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  img {
    width: 21px;
    height: 20px;
  }
`
export const Estrela = styled.div`
  color: ${cores.vermelhoRosado};
  font-weight: bold;
  font-size: 18px;
  display: flex;
  gap: 8px;
  align-content: center;
`

export const Descricao = styled.p`
  color: ${cores.vermelhoRosado};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const ContainerTag = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`
