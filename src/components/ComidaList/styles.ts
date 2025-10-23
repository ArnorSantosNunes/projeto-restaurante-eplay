import styled from 'styled-components'
import { ButtonLink } from '../Button/styles'
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

export const Porcao = styled.span``
// Modal

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.73);
  }

  ${ButtonLink} {
    background-color: ${cores.begePessego};
    color: ${cores.vermelhoRosado};
  }
`

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;
  position: relative;
  z-index: 1;
  max-width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: ${cores.vermelhoRosado};
`

export const Close = styled.img`
  position: absolute;
  margin-top: 8px;
  margin-right: 8px;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
`
export const ImgProduto = styled.header`
  img {
    width: 280px;
    height: 280px;
  }
`
export const InforContent = styled.div`
  h4,
  p {
    margin-bottom: 16px;
    color: ${cores.branca};
  }
  h4 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
  }
`
