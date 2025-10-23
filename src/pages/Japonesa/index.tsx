import { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import { ComidaList } from '../../components/ComidaList'
import { Rodape } from '../../components/Rodape'
import { Loja, Prato } from '../Home' // importa o tipo Loja
import { useParams } from 'react-router-dom'

const Japonesa = () => {
  const [pratos, setPratos] = useState<Prato[]>([])
  const [loja, setLoja] = useState<Loja | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Loja[]) => {
        const restauranteSelecionado = res.find(
          (item) => item.id === Number(id) // converte o id da URL para número
        )
        if (restauranteSelecionado) {
          setLoja(restauranteSelecionado)
          setPratos(restauranteSelecionado.cardapio)
        }
      })
      .catch((err) => console.error('Erro ao Carregar cardápio:', err))
  }, [id])

  return (
    <>
      <HeaderPerfil />
      <Banner heroBanner={loja} />
      {pratos.length > 0 ? (
        <ComidaList pratos={pratos} />
      ) : (
        <p>Carregando pratos...</p>
      )}
      <Rodape />
    </>
  )
}

export default Japonesa
