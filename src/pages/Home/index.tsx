import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { Rodape } from '../../components/Rodape'
import { useGetRestaurantesQuery } from '../../services/api' // ✅ import do RTK Query

export type Prato = {
  id: number
  restauranteId: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Loja = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const { data: lojas = [], isLoading, isError } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p>Carregando restaurantes...</p>
  }

  if (isError) {
    return <p>Erro ao carregar restaurantes 😢</p>
  }

  return (
    <>
      <Header />
      <ProductsList lojas={lojas} />
      <Rodape />
    </>
  )
}

export default Home
