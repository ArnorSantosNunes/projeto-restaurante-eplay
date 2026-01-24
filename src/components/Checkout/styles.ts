import styled from 'styled-components'
import { cores } from '../../styles'

type InputEspacoTopFrom = {
  marginTop?: string
}
type InputEspacobottomFrom = {
  marginBottom?: string
}
type MaxWidthDivCepNumero = {
  maxWidth?: string
}

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
  h2 {
    font-size: 16px;
    margin-top: 16px;
    color: ${cores.begePessego};
  }
  p {
    font-size: 14px;
    margin-top: 16px;
    color: ${cores.begePessego};
  }
  input {
    background-color: ${cores.begePessego};
    border: none;
    padding: 8px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  Button {
    background-color: ${cores.begePessego};
    color: ${cores.vermelhoRosado};
    width: 100%;
    margin-bottom: 8px;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 24px;
  color: ${cores.begePessego};
  display: flex;
  width: 100%;
  justify-content: space-between;

  h4 {
    font-size: 16px;
  }

  span {
    display: block;
    font-size: 12px;
    color: ${cores.begePessego};
    font-size: 14px;
  }
`
export const FormContainer = styled.div<
  InputEspacoTopFrom & InputEspacobottomFrom
>`
  margin-top: ${(props) => props.marginTop || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};

  display: flex;
  flex-direction: column;
  margin-top: 8px;
  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.begePessego};
  }
`

export const ContainerCepNumero = styled.div<
  InputEspacoTopFrom & InputEspacobottomFrom
>`
  margin-top: ${(props) => props.marginTop || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 8px;
  gap: 32px;
  label {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.begePessego};
  }
  input {
    margin-top: 8px;
    width: 100%;
  }
`

export const DivCepNumero = styled.div<MaxWidthDivCepNumero>`
  max-width: ${(props) => props.maxWidth || 'auto'};
`
