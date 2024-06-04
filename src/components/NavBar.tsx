import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Button from '@/components/Button'
import '@/assets/css/NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to="/">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Link>

      <div className='nav-actions'>
        <Link to="/cart">
          <Button variant='secondary'>
            Carrito
          </Button>
        </Link>
        <Link to="/favorite">
          <Button variant='secondary'>
            Favoritos
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar