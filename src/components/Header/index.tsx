import { HeaderBar, HeaderLogo } from './styles'
import bannerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

export const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <HeaderLogo className="header-container">
      <img src={logo} alt="" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </HeaderLogo>
  </HeaderBar>
)

export default Header
