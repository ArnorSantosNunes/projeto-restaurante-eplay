import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelhoRosado};
  color: ${cores.begePessego};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-height: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')} 4px 8px;
  display: inline-block;
`
