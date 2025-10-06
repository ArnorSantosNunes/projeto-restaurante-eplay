import Tag from '../Tag'

import {
  Card,
  Descricao,
  Titulo,
  CardContainer,
  TituloContainer,
  Estrela,
  Infos
} from './styles'
import { ButtonLink } from '../Button/styles'
import iconeEstrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  estrela: string
  id: number
}

const Product = ({ title, description, infos, image, estrela, id }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContainer>
      <TituloContainer>
        <Titulo>{title} </Titulo>
        <Estrela>
          {estrela} <img src={iconeEstrela} />
        </Estrela>
      </TituloContainer>
      <Descricao>{description}</Descricao>

      <ButtonLink
        to={`/restaurante/${id}`}
        type="link"
        title="Clique aqui e conheca a loja"
      >
        Saiba mais
      </ButtonLink>
    </CardContainer>
  </Card>
)

export default Product
