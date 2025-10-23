import { ConteudoListaComida, Titulo, Descricao } from './styles'
import Button from '../Button'

type Props = {
  id: number
  name: string
  descricao: string
  foto: string
  preco: string
  porcao: string
  onClick: () => void
}

export const Comida = ({ name, descricao, foto, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }
  return (
    <ConteudoListaComida>
      <img src={foto} alt={name} />
      <Titulo>{name}</Titulo>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <Button
        type="button"
        title="Clique aqui e veja detalhes"
        onClick={onClick} // abre o modal
      >
        Mais Detalhes
      </Button>
    </ConteudoListaComida>
  )
}

export default Comida
