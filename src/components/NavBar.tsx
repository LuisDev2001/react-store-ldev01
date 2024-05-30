import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'
import '@/assets/css/NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to="/">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Link>

      <div className='nav-actions'>
        <Link to="/cart">Carrito</Link>
        <Link to="/favorite">Favoritos</Link>
      </div>
    </nav>
  )
}

export default NavBar