import { Link } from 'react-router-dom'
import {FaAppleAlt} from 'react-icons/fa'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-1g navbar-light">
        <div className="container">
            <Link to='/'>
                <FaAppleAlt/>
            </Link>
            <Link className='navbar-brand' to='/'>
                <FaAppleAlt/>
            </Link>
            <div className='collapse navbar-collapse'>
                <ul className="navbar-nav m1-auto">
                    <li className='nav.item'>
                        <Link className='nav-link' to='/'>
                            <button type='button' className="btn btn-info">
                                Calorie Info
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar