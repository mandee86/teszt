import { css } from 'styled-components'
import { Colors } from '../theme/Theme.styles'

export const Buttons = css`
  .btn {
    text-align: center;
    padding: 5px;
    border: none;
    background: ${Colors['red']};
    &:hover {
      cursor: pointer;
    }
  }
`;