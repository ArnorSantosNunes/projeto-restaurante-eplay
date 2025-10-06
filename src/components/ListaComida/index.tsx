import Button from '../Button'
import macarrao from '../../assets/images/macarrao.png'
import {
  ContainerListaComida,
  ConteudoListaComida,
  Titulo,
  Descricao
} from './styles'

export const ListaComida = () => (
  <ContainerListaComida className="header-container">
    <ConteudoListaComida>
      <img src={macarrao} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button
        to={`/restaurante/`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        adicionar carrinho
      </Button>
    </ConteudoListaComida>
    <ConteudoListaComida>
      <img src={macarrao} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button
        to={`/restaurante/`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        adicionar carrinho
      </Button>
    </ConteudoListaComida>
    <ConteudoListaComida>
      <img src={macarrao} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button
        to={`/restaurante/`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        adicionar carrinho
      </Button>
    </ConteudoListaComida>
    <ConteudoListaComida>
      <img src={macarrao} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button
        to={`/restaurante/`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        adicionar carrinho
      </Button>
    </ConteudoListaComida>
    <ConteudoListaComida>
      <img src={macarrao} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button
        to={`/restaurante/`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        adicionar carrinho
      </Button>
    </ConteudoListaComida>
    <ConteudoListaComida>
      <img src={macarrao} alt="" />
      <Titulo>Pizza Marguerita</Titulo>
      <Descricao>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Descricao>
      <Button
        to={`/restaurante/`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        adicionar carrinho
      </Button>
    </ConteudoListaComida>
  </ContainerListaComida>
)
export default ListaComida
