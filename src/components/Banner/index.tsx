import { ComidaBar, TituloComidaContainer } from './styles'
import { Loja } from '../../pages/Home'

type Props = {
  lojas: Loja
}

export const Banner = ({ lojas }: Props) => {
  return (
    <ComidaBar style={{ backgroundImage: `url(${lojas.capa})` }}>
      <TituloComidaContainer className="header-container">
        <h1>{lojas.titulo}</h1>
        <h2>{lojas.tipo}</h2>
      </TituloComidaContainer>
    </ComidaBar>
  )
}

export default Banner
