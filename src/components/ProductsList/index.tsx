import Product from '../Product'
import { Container, List } from './styles'
import Loja from '../../models/Loja'

type Props = {
  lojas: Loja[]
}

const ProductsList = ({ lojas }: Props) => (
  <Container className="header-container">
    <List>
      {lojas.map((loja) => (
        <Product
          key={loja.id}
          id={loja.id}
          description={loja.description}
          image={loja.image}
          infos={loja.infos}
          title={loja.title}
          estrela={loja.estrela}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
