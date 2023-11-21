
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoSagaComics' src={"../img/superheroe.png"} alt="Logo Saga Comics" />
      </Link>
      <nav>
        <ul>
          <li>
          <NavLink to="categoria/2">Comics</NavLink>
          </li>
          <li>
          <NavLink to="categoria/3">Mangas</NavLink>
          </li>
       

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar