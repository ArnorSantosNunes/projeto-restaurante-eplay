import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/Button'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { parseToBrl } from '../../utils'

// Redux actions
import {
  open as openCartAction,
  selectCartTotal,
  clear as clearCartAction
} from '../../store/reducers/cart'
import { close as closeCheckoutAction } from '../../store/reducers/checkout'

import {
  CartContainer,
  Overlay,
  Prices,
  Sidebar,
  ContainerCepNumero,
  FormContainer,
  DivCepNumero,
  Paragrafobottom
} from './styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const [payWithCard, setPayWithCard] = useState(true)
  const [purchase, { data, isLoading, isError }] = usePurchaseMutation()

  // Seletores do Redux
  const isOpen = useSelector((state: RootReducer) => state.checkout.isOpen)
  const total = useSelector(selectCartTotal)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeDoCartao: '',
      numeroDoCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5, 'Nome muito curto').required('Obrigatório'),
      endereco: Yup.string()
        .min(5, 'Endereço inválido')
        .required('Obrigatório'),
      cidade: Yup.string().min(3, 'Cidade inválida').required('Obrigatório'),
      cep: Yup.string().min(8, 'CEP inválido').required('Obrigatório'),
      numero: Yup.string().required('Obrigatório'),
      nomeDoCartao: Yup.string()
        .min(5, 'Nome inválido')
        .required('Obrigatório'),
      numeroDoCartao: Yup.string()
        .min(16, 'Número inválido')
        .required('Obrigatório'),
      cvv: Yup.string().min(3, 'CVV inválido').required('Obrigatório'),
      mesVencimento: Yup.string().required('Obrigatório'),
      anoVencimento: Yup.string().required('Obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeDoCartao,
            number: values.numeroDoCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isInvalid = field in form.errors
    return isTouched && isInvalid ? message : ''
  }

  const handleCloseCheckout = () => {
    dispatch(closeCheckoutAction())
    if (data) {
      dispatch(clearCartAction())
    }
  }

  // ✅ FUNÇÃO ADICIONADA (reload tipo F5)
  const handleFinishAndReload = () => {
    dispatch(closeCheckoutAction())
    dispatch(clearCartAction())
    window.location.reload()
  }

  const handleBackToCart = () => {
    dispatch(openCartAction())
    dispatch(closeCheckoutAction())
  }

  const handleContinueToPayment = async () => {
    const errors = await form.validateForm()
    const deliveryFields = ['fullName', 'endereco', 'cidade', 'cep', 'numero']
    const hasErrors = deliveryFields.some(
      (field) => errors[field as keyof typeof errors]
    )

    if (!hasErrors) {
      setPayWithCard(false)
    } else {
      form.setTouched({
        fullName: true,
        endereco: true,
        cidade: true,
        cep: true,
        numero: true
      })
    }
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={handleCloseCheckout} />
        <Sidebar>
          {data ? (
            <div className="success-container">
              <h3>Pedido realizado - {data.orderId}</h3>
              <Paragrafobottom>
                Seu pedido está sendo preparado com carinho e logo chegará até
                você!
              </Paragrafobottom>
              <Paragrafobottom marginBottom="24px">
                Esperamos que desfrute de uma deliciosa experiência
                gastronômica. Bom apetite!
              </Paragrafobottom>
              <Button
                title="Concluir"
                type="button"
                onClick={handleFinishAndReload}
              >
                Concluir
              </Button>
            </div>
          ) : (
            <>
              {payWithCard ? (
                <>
                  <h2>Entrega</h2>

                  <FormContainer>
                    <label>Quem irá receber</label>
                    <input {...form.getFieldProps('fullName')} />
                    <small>
                      {getErrorMessage('fullName', form.errors.fullName)}
                    </small>
                  </FormContainer>

                  <FormContainer>
                    <label>Endereço</label>
                    <input {...form.getFieldProps('endereco')} />
                    <small>
                      {getErrorMessage('endereco', form.errors.endereco)}
                    </small>
                  </FormContainer>

                  <FormContainer>
                    <label>Cidade</label>
                    <input {...form.getFieldProps('cidade')} />
                    <small>
                      {getErrorMessage('cidade', form.errors.cidade)}
                    </small>
                  </FormContainer>

                  <ContainerCepNumero>
                    <DivCepNumero>
                      <label>CEP</label>
                      <input {...form.getFieldProps('cep')} />
                      <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </DivCepNumero>

                    <DivCepNumero>
                      <label>Número</label>
                      <input {...form.getFieldProps('numero')} />
                      <small>
                        {getErrorMessage('numero', form.errors.numero)}
                      </small>
                    </DivCepNumero>
                  </ContainerCepNumero>

                  <FormContainer marginBottom="24px">
                    <label>Complemento</label>
                    <input {...form.getFieldProps('complemento')} />
                  </FormContainer>

                  <Button
                    title="Continuar"
                    type="button"
                    onClick={handleContinueToPayment}
                  >
                    Continuar com o pagamento
                  </Button>

                  <Button
                    title="Voltar"
                    type="button"
                    onClick={handleBackToCart}
                  >
                    Voltar para o carrinho
                  </Button>
                </>
              ) : (
                <>
                  <Prices>
                    <h4>Pagamento - Valor a pagar {parseToBrl(total)}</h4>
                  </Prices>

                  {isError && (
                    <p style={{ color: 'red', marginBottom: '8px' }}>
                      Erro ao processar pedido. Tente novamente.
                    </p>
                  )}

                  <FormContainer>
                    <label>Nome no cartão</label>
                    <input {...form.getFieldProps('nomeDoCartao')} />
                  </FormContainer>

                  <FormContainer>
                    <label>Número do cartão</label>
                    <input {...form.getFieldProps('numeroDoCartao')} />
                  </FormContainer>

                  <ContainerCepNumero>
                    <DivCepNumero>
                      <label>CVV</label>
                      <input {...form.getFieldProps('cvv')} />
                    </DivCepNumero>

                    <DivCepNumero>
                      <label>Mês</label>
                      <input {...form.getFieldProps('mesVencimento')} />
                    </DivCepNumero>
                  </ContainerCepNumero>

                  <FormContainer marginBottom="24px">
                    <label>Ano</label>
                    <input {...form.getFieldProps('anoVencimento')} />
                  </FormContainer>

                  <Button title="Finalizar" type="submit" disabled={isLoading}>
                    {isLoading ? 'Processando...' : 'Finalizar pagamento'}
                  </Button>

                  <Button
                    title="Voltar"
                    type="button"
                    onClick={() => setPayWithCard(true)}
                  >
                    Voltar para endereço
                  </Button>
                </>
              )}
            </>
          )}
        </Sidebar>
      </CartContainer>
    </form>
  )
}

export default Checkout
