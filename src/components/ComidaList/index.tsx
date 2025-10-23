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

type Props = {
  pratos: Prato[]
}

export const ComidaList = ({ pratos }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  const abrirModal = (prato: Prato) => {
    setPratoSelecionado(prato)
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setPratoSelecionado(null)
  }

  return (
    <>
      <ContainerListaComida className="header-container">
        {pratos.map((prato) => (
          <Comida
            key={prato.id}
            id={prato.id}
            foto={prato.foto}
            nome={prato.nome}
            descricao={prato.descricao}
            preco={prato.preco}
            porcao={prato.porcao}
            onClick={() => abrirModal(prato)} // passa o prato para o modal
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
              <ButtonLink to="/" type="link">
                Adicionar ao carrinho - R$ {pratoSelecionado.preco}
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
