import styled from 'styled-components'
import { cores } from '../../styles'

import fechar from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelhoRosado};
  width: 360px;
  z-index: 1;
  padding-top: 40px;
  padding: 8px;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  Button {
    background-color: ${cores.begePessego};
    color: ${cores.vermelhoRosado};
    width: 100%;
    margin-top: 16px;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  color: ${cores.begePessego};
  display: flex;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-size: 14px;
  }

  span {
    display: block;
    font-size: 12px;
    color: ${cores.begePessego};
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.begePessego};
  padding: 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  div {
    h3 {
      color: ${cores.vermelhoRosado};
      font-weight: bold;
      font-size: 16px;
    }
    span {
      display: block;
      color: ${cores.vermelhoRosado};
      font-weight: bold;
      font-size: 16px;
      margin-top: 16px;
    }
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`
