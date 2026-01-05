import { useParams } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ComidaList } from '../../components/ComidaList'
import { Rodape } from '../../components/Rodape'

// Importamos apenas o hook que você definiu na sua API
import { useGetRestauranteIdQuery } from '../../services/api'

const Japonesa = () => {
  // 1. Obtemos o ID da URL
  const { id } = useParams<{ id: string }>()

  // 2. Fazemos apenas UMA chamada à API.
  // Passamos o 'id' como string, conforme definido no seu builder.query
  const {
    data: restaurante,
    isLoading,
    isError
  } = useGetRestauranteIdQuery(id!)

  // 3. Verificamos se está carregando
  if (isLoading) {
    return <p>Carregando cardápio...</p>
  }

  // 4. Verificamos se houve erro ou se o restaurante não foi encontrado
  if (isError || !restaurante) {
    return <p>Erro ao carregar o cardápio 😢</p>
  }

  return (
    <>
      <HeaderPerfil />
      {/* 5. Passamos o objeto 'restaurante' para o Banner */}
      <Banner lojas={restaurante} />
      {/* 6. Os pratos estão dentro de 'restaurante.cardapio'
          e o ID do restaurante é 'restaurante.id' */}
      <ComidaList
        pratos={restaurante.cardapio}
        restauranteId={restaurante.id}
      />
      <Rodape />
    </>
  )
}

export default Japonesa
