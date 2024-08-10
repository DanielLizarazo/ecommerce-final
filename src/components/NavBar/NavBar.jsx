import './NavBar.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'



function NavBar() {
    return (
        <nav className='nav-bar'>
            <ul className='nav-items'>
                <li className='item-nav'>
                <Link to={"/"}>
                <a className='logo'>inicio</a>
                </Link>
                    
                </li>
                <li className='item-nav'>

                    <Link to="/products">
                    <a className='item-text'>Productos</a>
                    </Link>
                    

                </li>
                <li className='item-nav'>
                    <a className='item-text'>Contacto</a>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar