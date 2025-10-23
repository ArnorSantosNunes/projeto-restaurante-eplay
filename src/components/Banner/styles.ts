import styled from 'styled-components'
import { cores } from '../../styles'
import bannerFundo from '../../assets/images/macarrao.png'

export const ComidaBar = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  backgroundimage: url(${bannerFundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const TituloComidaContainer = styled.div`
  h1 {
    color: ${cores.branca};
    padding-top: 25px;
    padding-bottom: 156px;
    font-style: italic;
    font-weight: 100;
  }
  h2 {
    color: ${cores.branca};
  }
`
