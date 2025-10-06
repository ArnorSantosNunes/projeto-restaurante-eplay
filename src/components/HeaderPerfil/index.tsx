import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import { Container } from '../ProductsList/styles'

const HeaderPerfil = () => {
  return (
    <header>
      <S.Section>
        <Container>
          <Link to="/">
            <a href="#">Restaurantes</a>
          </Link>
          <Link to="/" className="logo-primeiro">
            <h1>
              <img src={logo} alt="" />
            </h1>
          </Link>
          <span role="button">produto(s) no carrinho</span>
        </Container>
      </S.Section>
    </header>
  )
}
export default HeaderPerfil
