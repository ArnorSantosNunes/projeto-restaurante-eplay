import Button from '../Button'
import { CartContainer, Overlay, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { open as openCheckout } from '../../store/reducers/checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch({ type: 'cart/close' })
  }

  const handleGoToCheckout = () => {
    if (items.length > 0) {
      // 🔹 Abre o checkout e mantém o carrinho aberto visualmente
      dispatch(openCheckout())
    }
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (id: number, restauranteId: number) => {
    dispatch(remove({ id, restauranteId }))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={`${item.restauranteId}-${item.id}`}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{parseToBrl(item.preco)}</span>
                <button
                  onClick={() => removeItem(item.id, item.restauranteId)}
                  type="button"
                ></button>
              </div>
            </CartItem>
          ))}
        </ul>

        <Prices>
          <h4>Total</h4>
          <span>{parseToBrl(getTotalPrice())}</span>
        </Prices>

        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={handleGoToCheckout}
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
