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
        </div>
    </nav>
    </>
  )
}

export default Navbar