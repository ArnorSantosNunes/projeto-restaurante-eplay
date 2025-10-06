import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  bege: '#FFF8F2',
  vermelhoRosado: '#E66767',
  begePessego: '#FFEBD9',
  amarelo: '#FFB930'
}
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bege}
  }

    .header-container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`
