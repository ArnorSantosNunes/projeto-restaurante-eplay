import {
  Card,
  Descricao,
  Titulo,
  CardContainer,
  TituloContainer,
  Estrela,
  ContainerTag
} from './styles'
import { ButtonLink } from '../Button/styles'
import iconeEstrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  caparestaurantes: string
}

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  caparestaurantes
}: Props) => (
  <Card>
    <img src={caparestaurantes} alt={titulo} />
    <ContainerTag>
      {destacado && <Tag size="big">Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </ContainerTag>
    <CardContainer>
      <TituloContainer>
        <Titulo>{titulo} </Titulo>
        <Estrela>
          {avaliacao} <img src={iconeEstrela} />
        </Estrela>
      </TituloContainer>
      <Descricao>{descricao}</Descricao>

      <ButtonLink
        to={`/lojas/${id}`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        Saiba mais
      </ButtonLink>
    </CardContainer>
  </Card>
)

export default Product
