import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram.png'
import face from '../../assets/images/facebook.png'
import twi from '../../assets/images/twitter.png'
import { RedeSociais, RodapeContainer, Descricao, ListaRodape } from './styles'

export const Rodape = () => (
  <RodapeContainer>
    <ListaRodape className="header-container">
      <img src={logo} alt="" />
      <RedeSociais>
        <img src={insta} alt="" />
        <img src={face} alt="" />
        <img src={twi} alt="" />
      </RedeSociais>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Descricao>
    </ListaRodape>
  </RodapeContainer>
)
