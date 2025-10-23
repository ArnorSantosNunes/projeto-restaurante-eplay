import { Loja } from '../../pages/Home'
import { ComidaBar, TituloComidaContainer } from './styles'

type Props = {
  heroBanner: Loja | null
}
export const Banner = ({ heroBanner }: Props) => {
  if (!heroBanner) return null
  return (
    <ComidaBar
      key={heroBanner.id}
      style={{ backgroundImage: `url(${heroBanner.capa})` }}
    >
      <TituloComidaContainer className="header-container">
        <h1>{heroBanner.titulo}</h1>
        <h2>{heroBanner.tipo}</h2>
      </TituloComidaContainer>
    </ComidaBar>
  )
}

export default Banner
