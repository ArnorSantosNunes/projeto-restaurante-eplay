import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelhoRosado};
  color: ${cores.begePessego};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelhoRosado};
  color: ${cores.begePessego};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  text-decoration: none;
`
