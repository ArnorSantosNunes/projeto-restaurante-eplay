import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerListaComida = styled.div`
  background-color: ${cores.bege};
  padding-top: 24px;
  img {
    width: 100%;
  }
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
`

export const ConteudoListaComida = styled.div`
  background-color: ${cores.vermelhoRosado};
  padding: 5px;
  max-width: 320px;

  > button,
  a {
    width: 100%;
    display: inline-block;
    text-align: center;
    background-color: ${cores.begePessego};
    color: ${cores.vermelhoRosado};
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
