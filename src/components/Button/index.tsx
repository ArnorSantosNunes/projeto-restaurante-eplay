import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'submit' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer
      type={type} // 🔥 ESSENCIAL
      title={title}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
// Formulário envia → submit
// Navega → link
// Ação → button
