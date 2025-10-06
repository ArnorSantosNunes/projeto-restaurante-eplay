import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  margin-top: 80px;
  background-color: ${cores.branca};
  position: relative;

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
`
export const Estrela = styled.p`
  color: ${cores.vermelhoRosado};
  font-weight: bold;
  font-size: 18px;
`

export const Descricao = styled.p`
  color: ${cores.vermelhoRosado};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
