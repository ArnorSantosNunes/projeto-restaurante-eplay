import { useParams } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ComidaList } from '../../components/ComidaList'
import { Rodape } from '../../components/Rodape'
import { useGetRestauranteIdQuery } from '../../services/api'
import Checkout from '../../components/Checkout'

const Japonesa = () => {
  const { id } = useParams<{ id: string }>()

  const {
    data: restaurante,
    isLoading,
    isError
  } = useGetRestauranteIdQuery(id ?? '', {
    skip: !id
  })

  if (!id) {
    return <p>Restaurante não encontrado.</p>
  }

  if (isLoading) {
    return <p>Carregando cardápio...</p>
  }

  if (isError || !restaurante) {
    return <p>Erro ao carregar o cardápio 😢</p>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner lojas={restaurante} />
      <ComidaList
        pratos={restaurante.cardapio}
        restauranteId={restaurante.id}
      />
      <Rodape />
      <Checkout />
    </>
  )
}

export default Japonesa
