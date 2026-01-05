import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

// 👉 payload correto para remover
type RemovePayload = {
  id: number
  restauranteId: number
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const pratoExiste = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.restauranteId === action.payload.restauranteId
      )

      if (!pratoExiste) {
        state.items.push(action.payload)
      } else {
        alert('Este prato já está no carrinho!')
      }
    },

    // ✅ REMOÇÃO CORRETA (id + restauranteId)
    remove: (state, action: PayloadAction<RemovePayload>) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.restauranteId === action.payload.restauranteId
          )
      )
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
