import '@/assets/css/Button.css'
import { ReactNode } from 'react'

export interface Props {
  variant: 'primary' | 'secondary'
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <button
      className={`btn ${props.variant}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
