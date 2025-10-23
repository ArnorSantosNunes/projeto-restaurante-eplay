import { Loja } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  lojas: Loja[]
}

const ProductsList = ({ lojas }: Props) => {
  return (
    <Container className="header-container">
      <List>
        {lojas.map((loja) => (
          <Product
            key={loja.id}
            id={loja.id}
            caparestaurantes={loja.capa}
            titulo={loja.titulo}
            destacado={loja.destacado}
            tipo={loja.tipo}
            avaliacao={loja.avaliacao}
            descricao={loja.descricao}
          />
        ))}
      </List>
    </Container>
  )
}

export default ProductsList
