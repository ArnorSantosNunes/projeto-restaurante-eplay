import styled from 'styled-components'

import { cores } from '../../styles'

import HeroHeader from '../../assets/images/fundo.png'
import { Container } from '../ProductsList/styles'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${HeroHeader});

  h1 {
    line-height: 0;
  }

  a,
  span {
    cursor: pointer;
    text-decoration: none;
    color: ${cores.vermelhoRosado};
  }

  ${Container} {
    background-color: transparent;
    display: flex;
    height: 186px;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    font-weight: 900;
    font-size: 18px;
  }
`

export const Capa = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  color: #fff;
`

export const Transparente = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const Paragrafo = styled.p`
  top: 0;
  font-size: 32px;
  font-weight: 100;
  position: sticky;
  z-index: 1;
`
export const NomeRestaurante = styled.h2`
  position: absolute;
  margin-top: 156px;
  z-index: 1;
  font-size: 32px;
  font-weight: 900;
`
