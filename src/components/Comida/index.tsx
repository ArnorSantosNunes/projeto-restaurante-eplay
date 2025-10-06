import { ComidaBar, TituloComidaContainer } from './styles'
import bannerFundo from '../../assets/images/macarrao.png'

export const Comida = () => (
  <ComidaBar style={{ backgroundImage: `url(${bannerFundo})` }}>
    <TituloComidaContainer className="header-container">
      <h1>Italiana</h1>
      <h2>La Dolce Vita Trattoria</h2>
    </TituloComidaContainer>
  </ComidaBar>
)

export default Comida
