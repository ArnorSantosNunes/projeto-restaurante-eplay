import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { Rodape } from '../../components/Rodape'
import { useEffect, useState } from 'react'

// https://ebac-fake-api.vercel.app/api/efood/restaurantes
export type Prato = {
  id: number
  name: string
  descricao: string
  foto: string
  preco: string
  porcao: string
}

// Tipo para a loja
export type Loja = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Prato[] // agora é um array de Prato
}

const Home = () => {
  const [lojas, setLojas] = useState<Loja[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [])

  return (
    <>
      <Header />
      <ProductsList lojas={lojas} />
      <Rodape />
    </>
  )
}

export default Home
