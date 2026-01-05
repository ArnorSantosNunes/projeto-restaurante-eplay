import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import { Container } from '../ProductsList/styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
          <span role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </span>
        </Container>
      </S.Section>
    </header>
  )
}
export default HeaderPerfil
