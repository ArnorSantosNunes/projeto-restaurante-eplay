import { ConteudoListaComida, Titulo, Descricao } from './styles'
import Button from '../Button'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
  onClick: () => void
}

export const Comida = ({ nome, descricao, foto, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    return descricao.length > 150 ? descricao.slice(0, 150) + '...' : descricao
  }

  return (
    <ConteudoListaComida>
      <img src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <Button
        type="button"
        title="Clique aqui e veja detalhes"
        onClick={onClick}
      >
        Mais Detalhes
      </Button>
    </ConteudoListaComida>
  )
}

export default Comida
