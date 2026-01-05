import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Japonesa from './pages/Japonesa'
import { store } from './store'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/lojas/:id" element={<Japonesa />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className=".header-container"></div>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
