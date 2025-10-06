import styled from 'styled-components'
import { cores } from '../../styles'

export const RodapeContainer = styled.div`
  background-color: ${cores.begePessego};
  text-align: center;
  margin-top: 120px;
`

export const ListaRodape = styled.div`
  > img {
    padding-top: 40px;
    padding-bottom: 32px;
    width: 125px;
    display: block;
    margin: 0 auto;
  }
`
export const RedeSociais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  gap: 8px;
  > img {
    width: 24px;
  }
`
export const Descricao = styled.p`
  color: ${cores.vermelhoRosado};
  font-size: 14px;
  padding-bottom: 40px;
`
