import { Link } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa"
import { useAppSelector } from "../app/hooks"

function Navbar() {
  const { quantity } = useAppSelector((state) => state.shop)
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container-lg">
        <Link className="navbar-brand text-danger fw-bold fs-4" to="/">Eco-Friendly Store</Link> 
        <div>
          <Link to="/cart" className="btn btn-danger text-white ms-auto px-4 rounded-pill fw-bold">
            <FaCartArrowDown className="me-2 fs-4" />{quantity}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
