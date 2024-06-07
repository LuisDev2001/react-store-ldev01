import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Button from '@/components/Button'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between w-full max-w-[550px] mx-auto p-4 sticky top-2.5 rounded-2xl bg-[rgba(255,255,255,0.902)]'>
      <Link to="/">
        <img src={viteLogo} className="w-11" alt="Vite logo" />
      </Link>

      <div className='flex items-center gap-4'>
        <Link to="/cart">
          <Button variant='secondary'>
            Carrito
          </Button>
        </Link>
        <Link to="/favorite">
          <Button variant='primary'>
            Favoritos
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar