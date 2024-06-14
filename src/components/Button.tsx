import type { Button as Props } from '@/models/button.models'
const Button = (props: Props) => {
  const baseStyles = 'm-0 py-2 px-4 rounded-md border border-solid border-transparent cursor-pointer text-xs transition-all duration-300 disabled:opacity-80 disabled:pointer-events-none'

  const variants = {
    'primary': 'bg-primary text-white border-primary hover:bg-white hover:text-primary',
    'secondary': 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
  }

  return (
    <button
      className={`${baseStyles} ${variants[props.variant]}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
