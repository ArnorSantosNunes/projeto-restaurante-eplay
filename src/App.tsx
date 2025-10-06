import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Japonesa from './pages/Japonesa'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Japonesa />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className=".header-container"></div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
