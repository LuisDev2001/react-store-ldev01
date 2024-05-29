import viteLogo from '/vite.svg'
import '@/assets/css/NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
      <img src={viteLogo} className="logo" alt="Vite logo" />

      <div className='nav-actions'>
        <a href="#">Carrito</a>
        <a href="#">Favoritos</a>
      </div>
    </nav>
  )
}

export default NavBar