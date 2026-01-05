import { useState } from 'react'
import fechar from '../../assets/images/close.png'
import {
  ContainerListaComida,
  Modal,
  ModalContent,
  Close,
  ImgProduto,
  InforContent,
  Porcao
} from './styles'
import { ButtonLink } from '../Button/styles'
import Comida from '../Comida'
import { Prato } from '../../pages/Home'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  pratos: Prato[]
  restauranteId: number
}

export const ComidaList = ({ pratos, restauranteId }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  const dispatch = useDispatch()

  const abrirModal = (prato: Prato) => {
    setPratoSelecionado({
      ...prato,
      restauranteId // 🔥 AQUI ESTÁ A CORREÇÃO
    })
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setPratoSelecionado(null)
  }

  const addToCart = () => {
    if (!pratoSelecionado) return

    dispatch(add(pratoSelecionado))
    fecharModal()
    dispatch(open())
  }

  return (
    <>
      <ContainerListaComida className="header-container">
        {pratos.map((prato) => (
          <Comida
            key={`${restauranteId}-${prato.id}`} // 🔥 chave única
            id={prato.id}
            foto={prato.foto}
            nome={prato.nome}
            descricao={prato.descricao}
            preco={prato.preco}
            porcao={prato.porcao}
            onClick={() => abrirModal(prato)}
          />
        ))}
      </ContainerListaComida>

      {modalEstaAberto && pratoSelecionado && (
        <Modal className="visivel">
          <ModalContent className="header-container">
            <Close src={fechar} alt="Fechar" onClick={fecharModal} />
            <ImgProduto>
              <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
            </ImgProduto>
            <InforContent>
              <h4>{pratoSelecionado.nome}</h4>
              <p>{pratoSelecionado.descricao}</p>
              <p>
                Serve: <Porcao>{pratoSelecionado.porcao}</Porcao>
              </p>
              <ButtonLink to="/" type="link" onClick={addToCart}>
                Adicionar ao carrinho – R$ {pratoSelecionado.preco}
              </ButtonLink>
            </InforContent>
          </ModalContent>
          <div className="overlay" onClick={fecharModal}></div>
        </Modal>
      )}
    </>
  )
}

export default ComidaList
